"use client";

import React, { useState, FormEvent, useEffect } from "react";
import Link from 'next/link';
import { Home, BookOpen, Calendar } from 'lucide-react';
import ProgressCharts from "../components/ProgressCharts";
import MotivationCard from '../components/MotivationCard'; // NEW - import MotivationCard

interface Session {
  date: string;
  amount: number;
}

interface Subject {
  name: string;
  deadline: string;
  completed: boolean;
  note: string;
  priority: boolean;
  tag: string;
  color: string;
  mcqTotal: number;
  mcqDone: number;
  resource: string;
  resourceRating: number;
  mcqSessions: Session[];
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export default function PlannerDashboard() {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [newSubject, setNewSubject] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newTag, setNewTag] = useState("");
  const [newColor, setNewColor] = useState("#2352a1");
  const [newMcqTotal, setNewMcqTotal] = useState<number>(0);
  const [newResource, setNewResource] = useState("");
  const [newResourceRating, setNewResourceRating] = useState<number>(0);

  const [filterTag, setFilterTag] = useState("All");
  const [sortBy, setSortBy] = useState("deadline");
  const [view, setView] = useState("list");

  const [wellness, setWellness] = useState<number[]>([3, 3, 3, 3, 3, 3, 3]);
  const [streak, setStreak] = useState(0);
  const [lastActiveDate, setLastActiveDate] = useState("");
  const [mcqGoal, setMcqGoal] = useState(50);

  const [showReminders, setShowReminders] = useState(false);
  const [reminderTime, setReminderTime] = useState("09:00");
  const [reminderEnabled, setReminderEnabled] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [showPWAPrompt, setShowPWAPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  const [mounted, setMounted] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    setMounted(true);

    const savedSubjects = localStorage.getItem('planner-subjects-full');
    const savedWellness = localStorage.getItem('planner-wellness');
    const savedStreak = localStorage.getItem('planner-streak');
    const savedLastActive = localStorage.getItem('planner-last-active');
    const savedMcqGoal = localStorage.getItem('planner-mcq-goal');
    const savedReminderTime = localStorage.getItem('planner-reminder-time');
    const savedReminderEnabled = localStorage.getItem('planner-reminder-enabled');

    if (savedSubjects) {
      try {
        setSubjects(JSON.parse(savedSubjects));
      } catch (e) {
        console.error('Error loading subjects:', e);
      }
    }

    if (savedWellness) {
      try {
        setWellness(JSON.parse(savedWellness));
      } catch (e) {
        console.error('Error loading wellness:', e);
      }
    }

    if (savedStreak) setStreak(parseInt(savedStreak));
    if (savedLastActive) setLastActiveDate(savedLastActive);
    if (savedMcqGoal) setMcqGoal(parseInt(savedMcqGoal));
    if (savedReminderTime) setReminderTime(savedReminderTime);
    if (savedReminderEnabled) setReminderEnabled(savedReminderEnabled === 'true');

    // Update streak
    updateStreak();
  }, []);

  // Save to localStorage whenever data changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-subjects-full', JSON.stringify(subjects));
    }
  }, [subjects, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-wellness', JSON.stringify(wellness));
    }
  }, [wellness, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-streak', streak.toString());
    }
  }, [streak, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-last-active', lastActiveDate);
    }
  }, [lastActiveDate, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-mcq-goal', mcqGoal.toString());
    }
  }, [mcqGoal, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-reminder-time', reminderTime);
    }
  }, [reminderTime, mounted]);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('planner-reminder-enabled', reminderEnabled.toString());
    }
  }, [reminderEnabled, mounted]);

  // PWA Install Prompt
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowPWAPrompt(true);
      });
    }
  }, []);

  const installPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowPWAPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  // Update streak logic
  const updateStreak = () => {
    const today = todayISO();
    const last = lastActiveDate;

    if (!last) {
      setStreak(1);
      setLastActiveDate(today);
      return;
    }

    const lastDate = new Date(last);
    const todayDate = new Date(today);
    const diffDays = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      // Same day, no change
    } else if (diffDays === 1) {
      setStreak(prev => prev + 1);
      setLastActiveDate(today);
    } else {
      setStreak(1);
      setLastActiveDate(today);
    }
  };

  // Notifications
  const requestNotificationPermission = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support notifications");
      return false;
    }

    const permission = await Notification.requestPermission();
    return permission === "granted";
  };

  const scheduleReminder = async () => {
    const granted = await requestNotificationPermission();
    if (!granted) {
      alert("Please enable notifications to use reminders");
      return;
    }

    setReminderEnabled(true);
    alert(`Reminder set for ${reminderTime} daily`);
  };

  useEffect(() => {
    if (!reminderEnabled || !mounted) return;

    const checkReminder = () => {
      const now = new Date();
      const [hours, minutes] = reminderTime.split(':');
      const reminderDate = new Date();
      reminderDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      const diff = Math.abs(now.getTime() - reminderDate.getTime());
      if (diff < 60000) { // Within 1 minute
        if (Notification.permission === "granted") {
          new Notification("FMGE Study Reminder", {
            body: "Time to study! Keep up your streak 🔥",
            icon: "/icon.png"
          });
        }
      }
    };

    const interval = setInterval(checkReminder, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [reminderEnabled, reminderTime, mounted]);

  const addSubject = (e: FormEvent) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const subject: Subject = {
      name: newSubject.trim(),
      deadline: newDeadline,
      completed: false,
      note: "",
      priority: false,
      tag: newTag || "General",
      color: newColor,
      mcqTotal: newMcqTotal || 0,
      mcqDone: 0,
      resource: newResource,
      resourceRating: newResourceRating,
      mcqSessions: [],
    };

    setSubjects([...subjects, subject]);
    setNewSubject("");
    setNewDeadline("");
    setNewTag("");
    setNewColor("#2352a1");
    setNewMcqTotal(0);
    setNewResource("");
    setNewResourceRating(0);
  };

  const deleteSubject = (name: string) => {
    if (confirm(`Delete "${name}"?`)) {
      setSubjects(subjects.filter((s) => s.name !== name));
    }
  };

  const toggleCompleted = (name: string) => {
    setSubjects(
      subjects.map((s) =>
        s.name === name ? { ...s, completed: !s.completed } : s
      )
    );
  };

  const updateNote = (name: string, note: string) => {
    setSubjects(subjects.map((s) => (s.name === name ? { ...s, note } : s)));
  };

  const togglePriority = (name: string) => {
    setSubjects(
      subjects.map((s) =>
        s.name === name ? { ...s, priority: !s.priority } : s
      )
    );
  };

  const updateMCQ = (name: string, done: number) => {
    setSubjects(
      subjects.map((s) =>
        s.name === name ? { ...s, mcqDone: Math.max(0, Math.min(done, s.mcqTotal)) } : s
      )
    );
  };

  const addMCQSession = (name: string, amount: number) => {
    setSubjects(
      subjects.map((s) => {
        if (s.name === name) {
          const newDone = Math.min(s.mcqDone + amount, s.mcqTotal);
          const newSessions = [...s.mcqSessions, { date: todayISO(), amount }];
          return { ...s, mcqDone: newDone, mcqSessions: newSessions };
        }
        return s;
      })
    );
  };

  const updateWellness = (index: number, value: number) => {
    const newWellness = [...wellness];
    newWellness[index] = value;
    setWellness(newWellness);
  };

  const allTags = ["All", ...Array.from(new Set(subjects.map((s) => s.tag)))];

  let filteredSubjects = subjects;
  if (filterTag !== "All") {
    filteredSubjects = filteredSubjects.filter((s) => s.tag === filterTag);
  }
  if (searchQuery.trim()) {
    filteredSubjects = filteredSubjects.filter((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const sortedSubjects = [...filteredSubjects].sort((a, b) => {
    if (sortBy === "deadline") {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
    }
    if (sortBy === "priority") {
      if (a.priority && !b.priority) return -1;
      if (!a.priority && b.priority) return 1;
      return 0;
    }
    if (sortBy === "progress") {
      const aPercent = a.mcqTotal > 0 ? a.mcqDone / a.mcqTotal : 0;
      const bPercent = b.mcqTotal > 0 ? b.mcqDone / b.mcqTotal : 0;
      return bPercent - aPercent;
    }
    return 0;
  });

  const totalMCQ = subjects.reduce((sum, s) => sum + s.mcqTotal, 0);
  const doneMCQ = subjects.reduce((sum, s) => sum + s.mcqDone, 0);
  const overallPercent = totalMCQ > 0 ? Math.round((doneMCQ / totalMCQ) * 100) : 0;

  const completedSubjects = subjects.filter((s) => s.completed).length;

  if (!mounted) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0f111a, #151624)' }}>
        <p style={{ color: '#b8cdf1' }}>Loading planner...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f111a, #151624)", color: "#efeff5", fontFamily: "system-ui, sans-serif", padding: "0" }}>
      {/* Navigation Bar */}
      <nav style={{ borderBottom: '1px solid #232942', background: 'rgba(24, 25, 43, 0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #2352a1, #43ea8f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
              FH
            </div>
            <div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#c4d7fd', letterSpacing: '-0.5px' }}>FMGE Horizon</div>
              <div style={{ fontSize: '10px', color: '#7a8194', marginTop: '-2px' }}>Study Planner</div>
            </div>
          </Link>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link 
              href="/"
              style={{ 
                padding: '10px 18px', 
                borderRadius: '8px', 
                background: 'rgba(35, 82, 161, 0.15)', 
                border: '1px solid rgba(35, 82, 161, 0.4)', 
                color: '#2352a1',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              <Home style={{ width: '16px', height: '16px' }} />
              Home
            </Link>
            <Link 
              href="/syllabus"
              style={{ 
                padding: '10px 18px', 
                borderRadius: '8px', 
                background: 'rgba(67, 234, 143, 0.15)', 
                border: '1px solid rgba(67, 234, 143, 0.4)', 
                color: '#43ea8f',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 600,
                transition: 'all 0.2s'
              }}
            >
              <BookOpen style={{ width: '16px', height: '16px' }} />
              Syllabus
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        {/* MotivationCard - integrate at the top */}
        <MotivationCard />
        
        {/* PWA Install Banner */}
        {showPWAPrompt && (
          <div style={{ background: "#18192b", padding: "15px 20px", borderRadius: "12px", border: "1px solid #232942", marginBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <strong style={{ color: "#c4d7fd" }}>📱 Install FMGE Planner</strong>
              <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "#7a8194" }}>Install as an app for offline access and notifications</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={installPWA} style={{ padding: "8px 16px", background: "#2352a1", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }}>
                Install
              </button>
              <button onClick={() => setShowPWAPrompt(false)} style={{ padding: "8px 16px", background: "#232942", color: "#b8cdf1", border: "none", borderRadius: "8px", cursor: "pointer" }}>
                Later
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header style={{ marginBottom: "30px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "10px", color: "#c4d7fd" }}>
            📚 FMGE Study Planner
          </h1>
          <p style={{ color: "#b8cdf1", fontSize: "1.1rem" }}>
            Track subjects, MCQs, wellness, and stay on target for exam day
          </p>
        </header>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginBottom: "30px" }}>
          <div style={{ background: "#18192b", padding: "20px", borderRadius: "12px", border: "1px solid #232942" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#43ea8f" }}>{overallPercent}%</div>
            <div style={{ color: "#b8cdf1", marginTop: "5px" }}>Overall Progress</div>
            <div style={{ fontSize: "0.85rem", color: "#7a8194", marginTop: "3px" }}>{doneMCQ} / {totalMCQ} MCQs</div>
          </div>
          
          <div style={{ background: "#18192b", padding: "20px", borderRadius: "12px", border: "1px solid #232942" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#2352a1" }}>{completedSubjects}</div>
            <div style={{ color: "#b8cdf1", marginTop: "5px" }}>Completed</div>
            <div style={{ fontSize: "0.85rem", color: "#7a8194", marginTop: "3px" }}>out of {subjects.length} subjects</div>
          </div>
          
          <div style={{ background: "#18192b", padding: "20px", borderRadius: "12px", border: "1px solid #232942" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#ffba1a" }}>{streak}</div>
            <div style={{ color: "#b8cdf1", marginTop: "5px" }}>Day Streak</div>
            <div style={{ fontSize: "0.85rem", color: "#7a8194", marginTop: "3px" }}>Keep it up! 🔥</div>
          </div>
          
          <div style={{ background: "#18192b", padding: "20px", borderRadius: "12px", border: "1px solid #232942" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#29feef" }}>{mcqGoal}</div>
            <div style={{ color: "#b8cdf1", marginTop: "5px" }}>Daily MCQ Goal</div>
            <div style={{ fontSize: "0.85rem", color: "#7a8194", marginTop: "3px" }}>
              <input 
                type="number" 
                value={mcqGoal} 
                onChange={(e) => setMcqGoal(parseInt(e.target.value) || 0)}
                style={{ width: "60px", background: "#151624", color: "#b8cdf1", border: "1px solid #232942", borderRadius: "4px", padding: "2px 6px" }}
              />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "30px", borderBottom: "2px solid #232942", paddingBottom: "10px" }}>
          <button
            onClick={() => setView("list")}
            style={{
              padding: "10px 20px",
              background: view === "list" ? "#2352a1" : "transparent",
              color: view === "list" ? "white" : "#b8cdf1",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: view === "list" ? "bold" : "normal",
              transition: "all 0.2s"
            }}
          >
            📋 Subjects
          </button>
          <button
            onClick={() => setView("analytics")}
            style={{
              padding: "10px 20px",
              background: view === "analytics" ? "#2352a1" : "transparent",
              color: view === "analytics" ? "white" : "#b8cdf1",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: view === "analytics" ? "bold" : "normal",
              transition: "all 0.2s"
            }}
          >
            📊 Analytics
          </button>
          <button
            onClick={() => setView("wellness")}
            style={{
              padding: "10px 20px",
              background: view === "wellness" ? "#2352a1" : "transparent",
              color: view === "wellness" ? "white" : "#b8cdf1",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: view === "wellness" ? "bold" : "normal",
              transition: "all 0.2s"
            }}
          >
            🧠 Wellness
          </button>
          <button
            onClick={() => setShowReminders(!showReminders)}
            style={{
              padding: "10px 20px",
              background: showReminders ? "#2352a1" : "transparent",
              color: showReminders ? "white" : "#b8cdf1",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: showReminders ? "bold" : "normal",
              transition: "all 0.2s"
            }}
          >
            ⏰ Reminders
          </button>
        </div>

        {/* Reminders Panel */}
        {showReminders && (
          <div style={{ background: "#18192b", padding: "25px", borderRadius: "12px", border: "1px solid #232942", marginBottom: "30px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#c4d7fd" }}>⏰ Daily Study Reminders</h2>
            <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Reminder Time:</label>
                <input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  style={{ padding: "10px", background: "#151624", color: "#b8cdf1", border: "1px solid #232942", borderRadius: "8px", fontSize: "1rem" }}
                />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button
                  onClick={scheduleReminder}
                  disabled={reminderEnabled}
                  style={{
                    padding: "10px 20px",
                    background: reminderEnabled ? "#43ea8f" : "#2352a1",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: reminderEnabled ? "not-allowed" : "pointer",
                    fontWeight: "bold",
                    opacity: reminderEnabled ? 0.7 : 1
                  }}
                >
                  {reminderEnabled ? "✓ Enabled" : "Enable Reminders"}
                </button>
                {reminderEnabled && (
                  <button
                    onClick={() => setReminderEnabled(false)}
                    style={{
                      padding: "10px 20px",
                      background: "#fe3292",
                      color: "white",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      fontWeight: "bold"
                    }}
                  >
                    Disable
                  </button>
                )}
              </div>
            </div>
            <p style={{ marginTop: "15px", color: "#7a8194", fontSize: "0.9rem" }}>
              📱 Enable browser notifications to receive daily study reminders at your chosen time.
            </p>
          </div>
        )}

        {/* Analytics View */}
        {view === "analytics" && (
          <ProgressCharts subjects={subjects} wellness={wellness} streak={streak} mcqGoal={mcqGoal} />
        )}

        {/* Wellness View */}
        {view === "wellness" && (
          <div style={{ background: "#18192b", padding: "25px", borderRadius: "12px", border: "1px solid #232942" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#c4d7fd" }}>🧠 Daily Wellness Tracker</h2>
            <p style={{ color: "#b8cdf1", marginBottom: "20px" }}>
              Track how you felt each day (1 = Poor, 5 = Excellent). This helps identify patterns and burnout.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))", gap: "15px" }}>
              {wellness.map((val, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ marginBottom: "8px", color: "#b8cdf1", fontWeight: "bold" }}>Day {i + 1}</div>
                  <select
                    value={val}
                    onChange={(e) => updateWellness(i, parseInt(e.target.value))}
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: "#151624",
                      color: val <= 2 ? "#fe3292" : val === 3 ? "#ffba1a" : "#43ea8f",
                      border: "1px solid #232942",
                      borderRadius: "8px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      cursor: "pointer"
                    }}
                  >
                    <option value={1}>1 😞</option>
                    <option value={2}>2 😕</option>
                    <option value={3}>3 😐</option>
                    <option value={4}>4 🙂</option>
                    <option value={5}>5 😄</option>
                  </select>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "20px", padding: "15px", background: "#151624", borderRadius: "8px" }}>
              <div style={{ fontSize: "0.9rem", color: "#b8cdf1", marginBottom: "8px" }}>
                <strong>Average:</strong> {(wellness.reduce((a, b) => a + b, 0) / wellness.length).toFixed(1)} / 5
              </div>
              <div style={{ fontSize: "0.85rem", color: "#7a8194" }}>
                💡 Tip: If your average drops below 3, consider taking a break or adjusting your study schedule.
              </div>
            </div>
          </div>
        )}

        {/* List View */}
        {view === "list" && (
          <>
            {/* Add Subject Form */}
            <div style={{ background: "#18192b", padding: "25px", borderRadius: "12px", border: "1px solid #232942", marginBottom: "30px" }}>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#c4d7fd" }}>➕ Add New Subject</h2>
              <form onSubmit={addSubject}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px", marginBottom: "15px" }}>
                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Subject Name *</label>
                    <input
                      type="text"
                      value={newSubject}
                      onChange={(e) => setNewSubject(e.target.value)}
                      placeholder="e.g., General Medicine"
                      required
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Deadline</label>
                    <input
                      type="date"
                      value={newDeadline}
                      onChange={(e) => setNewDeadline(e.target.value)}
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Tag</label>
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="e.g., Clinical"
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>MCQ Total</label>
                    <input
                      type="number"
                      value={newMcqTotal || ""}
                      onChange={(e) => setNewMcqTotal(parseInt(e.target.value) || 0)}
                      placeholder="0"
                      min="0"
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Resource</label>
                    <input
                      type="text"
                      value={newResource}
                      onChange={(e) => setNewResource(e.target.value)}
                      placeholder="e.g., Marrow/PrepLadder"
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Resource Rating (0-5)</label>
                    <input
                      type="number"
                      value={newResourceRating || ""}
                      onChange={(e) => setNewResourceRating(Math.min(5, Math.max(0, parseInt(e.target.value) || 0)))}
                      placeholder="0"
                      min="0"
                      max="5"
                      style={{ width: "100%", padding: "10px", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", marginBottom: "5px", color: "#b8cdf1", fontSize: "0.9rem" }}>Color</label>
                    <input
                      type="color"
                      value={newColor}
                      onChange={(e) => setNewColor(e.target.value)}
                      style={{ width: "100%", height: "42px", padding: "2px", background: "#151624", border: "1px solid #232942", borderRadius: "8px", cursor: "pointer" }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  style={{
                    padding: "12px 30px",
                    background: "linear-gradient(135deg, #2352a1, #43ea8f)",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "transform 0.2s"
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                >
                  ➕ Add Subject
                </button>
              </form>
            </div>

            {/* Filters */}
            <div style={{ display: "flex", gap: "15px", marginBottom: "20px", flexWrap: "wrap", alignItems: "center" }}>
              <div>
                <label style={{ marginRight: "8px", color: "#b8cdf1", fontSize: "0.9rem" }}>🏷️ Filter:</label>
                <select
                  value={filterTag}
                  onChange={(e) => setFilterTag(e.target.value)}
                  style={{ padding: "8px 12px", background: "#18192b", color: "#b8cdf1", border: "1px solid #232942", borderRadius: "8px", cursor: "pointer" }}
                >
                  {allTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ marginRight: "8px", color: "#b8cdf1", fontSize: "0.9rem" }}>🔽 Sort:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{ padding: "8px 12px", background: "#18192b", color: "#b8cdf1", border: "1px solid #232942", borderRadius: "8px", cursor: "pointer" }}
                >
                  <option value="deadline">Deadline</option>
                  <option value="priority">Priority</option>
                  <option value="progress">Progress</option>
                </select>
              </div>

              <div style={{ flex: 1 }}>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="🔍 Search subjects..."
                  style={{ width: "100%", padding: "8px 12px", background: "#18192b", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px" }}
                />
              </div>
            </div>

            {/* Subjects List */}
            {sortedSubjects.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", background: "#18192b", borderRadius: "12px", border: "2px dashed #232942" }}>
                <div style={{ fontSize: "4rem", marginBottom: "15px" }}>📚</div>
                <p style={{ color: "#b8cdf1", fontSize: "1.1rem" }}>No subjects yet. Add your first subject above!</p>
              </div>
            ) : (
              <div style={{ display: "grid", gap: "20px" }}>
                {sortedSubjects.map((subj) => {
                  const percent = subj.mcqTotal > 0 ? Math.round((subj.mcqDone / subj.mcqTotal) * 100) : 0;
                  const daysLeft = subj.deadline ? Math.ceil((new Date(subj.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)) : null;
                  
                  return (
                    <div
                      key={subj.name}
                      style={{
                        background: "#18192b",
                        padding: "25px",
                        borderRadius: "12px",
                        border: `2px solid ${subj.completed ? "#43ea8f" : subj.priority ? "#fe3292" : "#232942"}`,
                        transition: "all 0.3s"
                      }}
                    >
                      {/* Header */}
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "15px" }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                            <h3 style={{ margin: 0, fontSize: "1.4rem", color: "#c4d7fd", textDecoration: subj.completed ? "line-through" : "none" }}>
                              {subj.name}
                            </h3>
                            {subj.priority && <span style={{ fontSize: "1.2rem" }}>⭐</span>}
                            {subj.completed && <span style={{ fontSize: "1.2rem" }}>✅</span>}
                          </div>
                          
                          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", fontSize: "0.85rem", color: "#7a8194" }}>
                            {subj.tag && (
                              <span style={{ padding: "3px 10px", background: subj.color || "#2352a1", borderRadius: "12px", color: "white" }}>
                                🏷️ {subj.tag}
                              </span>
                            )}
                            {subj.deadline && (
                              <span style={{ padding: "3px 10px", background: daysLeft && daysLeft < 7 ? "#fe3292" : "#232942", borderRadius: "12px" }}>
                                📅 {daysLeft !== null && daysLeft >= 0 ? `${daysLeft} days left` : "Overdue"}
                              </span>
                            )}
                            {subj.resource && (
                              <span style={{ padding: "3px 10px", background: "#232942", borderRadius: "12px" }}>
                                📖 {subj.resource} {subj.resourceRating > 0 && `⭐ ${subj.resourceRating}/5`}
                              </span>
                            )}
                          </div>
                        </div>

                        <div style={{ display: "flex", gap: "8px" }}>
                          <button
                            onClick={() => togglePriority(subj.name)}
                            style={{
                              padding: "8px 12px",
                              background: subj.priority ? "#fe3292" : "#232942",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "1rem"
                            }}
                            title="Toggle Priority"
                          >
                            ⭐
                          </button>
                          <button
                            onClick={() => toggleCompleted(subj.name)}
                            style={{
                              padding: "8px 12px",
                              background: subj.completed ? "#43ea8f" : "#232942",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "1rem"
                            }}
                            title="Mark Complete"
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => deleteSubject(subj.name)}
                            style={{
                              padding: "8px 12px",
                              background: "#fe3292",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "1rem"
                            }}
                            title="Delete"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>

                      {/* MCQ Progress */}
                      <div style={{ marginBottom: "15px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px", color: "#b8cdf1" }}>
                          <span>📝 MCQ Progress</span>
                          <span style={{ fontWeight: "bold" }}>{subj.mcqDone} / {subj.mcqTotal} ({percent}%)</span>
                        </div>
                        <div style={{ background: "#151624", borderRadius: "8px", padding: "4px", height: "24px" }}>
                          <div style={{ height: "100%", width: `${percent}%`, background: subj.color || "#2352a1", borderRadius: "6px", transition: "width 0.5s" }}></div>
                        </div>
                        
                        <div style={{ display: "flex", gap: "10px", marginTop: "12px", alignItems: "center" }}>
                          <button
                            onClick={() => updateMCQ(subj.name, subj.mcqDone - 1)}
                            disabled={subj.mcqDone === 0}
                            style={{
                              padding: "8px 15px",
                              background: "#232942",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: subj.mcqDone === 0 ? "not-allowed" : "pointer",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                              opacity: subj.mcqDone === 0 ? 0.5 : 1
                            }}
                          >
                            −
                          </button>
                          
                          <input
                            type="number"
                            value={subj.mcqDone}
                            onChange={(e) => updateMCQ(subj.name, parseInt(e.target.value) || 0)}
                            min="0"
                            max={subj.mcqTotal}
                            style={{ flex: 1, padding: "8px", textAlign: "center", background: "#151624", color: "#efeff5", border: "1px solid #232942", borderRadius: "8px", fontSize: "1rem" }}
                          />
                          
                          <button
                            onClick={() => updateMCQ(subj.name, subj.mcqDone + 1)}
                            disabled={subj.mcqDone >= subj.mcqTotal}
                            style={{
                              padding: "8px 15px",
                              background: "#232942",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: subj.mcqDone >= subj.mcqTotal ? "not-allowed" : "pointer",
                              fontSize: "1.2rem",
                              fontWeight: "bold",
                              opacity: subj.mcqDone >= subj.mcqTotal ? 0.5 : 1
                            }}
                          >
                            +
                          </button>

                          <button
                            onClick={() => {
                              const amount = prompt("How many MCQs did you complete today?");
                              if (amount) addMCQSession(subj.name, parseInt(amount));
                            }}
                            style={{
                              padding: "8px 15px",
                              background: "linear-gradient(135deg, #2352a1, #43ea8f)",
                              color: "white",
                              border: "none",
                              borderRadius: "8px",
                              cursor: "pointer",
                              fontSize: "0.9rem",
                              fontWeight: "bold",
                              whiteSpace: "nowrap"
                            }}
                          >
                            + Session
                          </button>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label style={{ display: "block", marginBottom: "8px", color: "#b8cdf1", fontSize: "0.9rem" }}>📝 Notes:</label>
                        <textarea
                          value={subj.note}
                          onChange={(e) => updateNote(subj.name, e.target.value)}
                          placeholder="Add notes, key topics, or revision points..."
                          rows={3}
                          style={{
                            width: "100%",
                            padding: "12px",
                            background: "#151624",
                            color: "#efeff5",
                            border: "1px solid #232942",
                            borderRadius: "8px",
                            resize: "vertical",
                            fontFamily: "inherit"
                          }}
                        />
                      </div>

                      {/* MCQ Sessions History */}
                      {subj.mcqSessions.length > 0 && (
                        <details style={{ marginTop: "15px" }}>
                          <summary style={{ cursor: "pointer", color: "#b8cdf1", fontSize: "0.9rem", userSelect: "none" }}>
                            📊 Session History ({subj.mcqSessions.length} sessions)
                          </summary>
                          <div style={{ marginTop: "10px", maxHeight: "150px", overflowY: "auto" }}>
                            {subj.mcqSessions.slice().reverse().map((session, i) => (
                              <div key={i} style={{ padding: "8px", background: "#151624", borderRadius: "6px", marginBottom: "6px", display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "#7a8194" }}>
                                <span>{new Date(session.date).toLocaleDateString()}</span>
                                <span style={{ fontWeight: "bold", color: "#43ea8f" }}>+{session.amount} MCQs</span>
                              </div>
                            ))}
                          </div>
                        </details>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}
