export interface ReminderConfig {
  enabled: boolean;
  time: string; // HH:MM format
  reminderDay: 'same-day' | 'day-before'; // Reminder on same day or day before
  reminderOnMCQMiss: boolean;
}

export const defaultReminderConfig: ReminderConfig = {
  enabled: false,
  time: '08:00',
  reminderDay: 'same-day',
  reminderOnMCQMiss: true,
};

export function getReminderConfig(): ReminderConfig {
  if (typeof window === 'undefined') return defaultReminderConfig;
  const saved = localStorage.getItem('reminderConfig');
  return saved ? JSON.parse(saved) : defaultReminderConfig;
}

export function setReminderConfig(config: ReminderConfig) {
  localStorage.setItem('reminderConfig', JSON.stringify(config));
}

export function checkAndTriggerReminders(
  subjects: any[],
  streak: number,
  todayStudied: boolean,
  mcqGoal: number
) {
  const today = new Date();
  const config = getReminderConfig();

  if (!config.enabled) return;

  // Check if it's time to remind
  const currentHour = today.getHours();
  const currentMinute = today.getMinutes();
  const [reminderHour, reminderMinute] = config.time.split(':').map(Number);

  // Trigger reminder if within 1 minute window
  if (currentHour === reminderHour && currentMinute === reminderMinute) {
    const upcomingSubjects = subjects.filter(s => {
      const deadline = new Date(s.deadline);
      const daysUntil = Math.ceil((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      return daysUntil >= 0;
    });

    const totalMCQDone = subjects.reduce((sum, s) => sum + s.mcqDone, 0);
    const totalMCQTarget = mcqGoal;

    let notificationTitle = '';
    let notificationBody = '';

    // Daily goals reminder
    if (config.reminderDay === 'same-day' || config.reminderDay === 'day-before') {
      notificationTitle = '📚 Daily Study Reminder';
      notificationBody = `You have ${upcomingSubjects.length} subjects to review today. Keep that streak going! 🔥`;
    }

    // MCQ goal not met
    if (config.reminderOnMCQMiss && totalMCQDone < totalMCQTarget && !todayStudied) {
      notificationTitle = '📝 MCQ Goal Reminder';
      notificationBody = `You haven't reached today's MCQ goal yet. Target: ${totalMCQTarget}, Done: ${totalMCQDone}. Let's catch up! 💪`;
    }

    if (notificationTitle) {
      sendNotification(notificationTitle, notificationBody);
    }
  }
}

export async function sendNotification(title: string, body: string) {
  // Browser Notification API
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, {
      body,
      icon: '/icon-192.png',
      badge: '/badge-72.png',
      tag: 'fmge-reminder',
      requireInteraction: true,
    });
  }

  // Service Worker Push Notification (if registered)
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();

      if (subscription) {
        // In production, send to server to trigger push
        console.log('Push notification ready (implement server-side triggering)');
      }
    } catch (err) {
      console.log('Push notification error:', err);
    }
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (!('Notification' in window)) {
    alert('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
}

export async function subscribeToPushNotifications(): Promise<boolean> {
  try {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      alert('Your browser does not support push notifications');
      return false;
    }

    const registration = await navigator.serviceWorker.ready;
    let subscription = await registration.pushManager.getSubscription();

    if (!subscription) {
      const vapidPublicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY || '';
      
      if (!vapidPublicKey) {
        console.log('Push notifications not configured - skipping setup');
        return false;
      }

      const vapidArray = urlBase64ToUint8Array(vapidPublicKey);
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidArray as BufferSource,
      });

      console.log('Push subscription created:', subscription);
    }

    return true;
  } catch (err) {
    console.error('Push subscription error:', err);
    return false;
  }
}

export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  
  if (typeof window === 'undefined') {
    return new Uint8Array(0);
  }

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  
  return outputArray;
}
