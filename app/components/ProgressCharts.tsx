"use client";

import React from 'react';

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

interface Props {
  subjects: Subject[];
  wellness: number[];
  streak: number;
  mcqGoal: number;
}

export default function ProgressCharts({ subjects, wellness, streak, mcqGoal }: Props) {
  const totalMCQ = subjects.reduce((sum, s) => sum + s.mcqTotal, 0);
  const doneMCQ = subjects.reduce((sum, s) => sum + s.mcqDone, 0);
  const completedSubjects = subjects.filter(s => s.completed).length;
  
  // Calculate MCQs per day over last 7 days
  const last7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return date.toISOString().slice(0, 10);
  });
  
  const mcqByDay = last7Days.map(day => {
    let total = 0;
    subjects.forEach(subj => {
      const sessions = subj.mcqSessions.filter(s => s.date === day);
      sessions.forEach(s => total += s.amount);
    });
    return { date: day, count: total };
  });
  
  const maxMCQs = Math.max(...mcqByDay.map(d => d.count), 1);
  const avgWellness = (wellness.reduce((a, b) => a + b, 0) / wellness.length).toFixed(1);

  return (
    <div style={{ color: '#efeff5', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '30px', color: '#c4d7fd' }}>
        📊 Progress Analytics
      </h1>
      
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
        <div style={{ background: '#18192b', padding: '20px', borderRadius: '12px', border: '1px solid #232942' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#43ea8f' }}>{doneMCQ}</div>
          <div style={{ color: '#b8cdf1', marginTop: '5px' }}>MCQs Completed</div>
          <div style={{ fontSize: '0.9rem', color: '#7a8194', marginTop: '3px' }}>out of {totalMCQ}</div>
        </div>
        
        <div style={{ background: '#18192b', padding: '20px', borderRadius: '12px', border: '1px solid #232942' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2352a1' }}>{completedSubjects}</div>
          <div style={{ color: '#b8cdf1', marginTop: '5px' }}>Subjects Done</div>
          <div style={{ fontSize: '0.9rem', color: '#7a8194', marginTop: '3px' }}>out of {subjects.length}</div>
        </div>
        
        <div style={{ background: '#18192b', padding: '20px', borderRadius: '12px', border: '1px solid #232942' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffba1a' }}>{streak}</div>
          <div style={{ color: '#b8cdf1', marginTop: '5px' }}>Day Streak</div>
          <div style={{ fontSize: '0.9rem', color: '#7a8194', marginTop: '3px' }}>Keep it up! 🔥</div>
        </div>
        
        <div style={{ background: '#18192b', padding: '20px', borderRadius: '12px', border: '1px solid #232942' }}>
          <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#29feef' }}>{avgWellness}</div>
          <div style={{ color: '#b8cdf1', marginTop: '5px' }}>Avg Wellness</div>
          <div style={{ fontSize: '0.9rem', color: '#7a8194', marginTop: '3px' }}>Last 7 days</div>
        </div>
      </div>
      
      {/* MCQ Progress by Day */}
      <div style={{ background: '#18192b', padding: '25px', borderRadius: '12px', border: '1px solid #232942', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#c4d7fd' }}>
          📈 MCQ Activity (Last 7 Days)
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', height: '200px' }}>
          {mcqByDay.map((day, i) => {
            const height = (day.count / maxMCQs) * 100;
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '0.85rem', color: '#b8cdf1', fontWeight: 'bold' }}>{day.count}</div>
                <div style={{ width: '100%', height: `${height}%`, minHeight: day.count > 0 ? '10px' : '2px', background: day.count >= mcqGoal/7 ? '#43ea8f' : '#2352a1', borderRadius: '6px 6px 0 0', transition: 'height 0.3s' }}></div>
                <div style={{ fontSize: '0.75rem', color: '#7a8194', marginTop: '5px' }}>
                  {new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: 'center', marginTop: '15px', fontSize: '0.9rem', color: '#7a8194' }}>
          Goal: {Math.round(mcqGoal/7)} MCQs/day
        </div>
      </div>
      
      {/* Wellness Trend */}
      <div style={{ background: '#18192b', padding: '25px', borderRadius: '12px', border: '1px solid #232942', marginBottom: '30px' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#c4d7fd' }}>
          🧠 Wellness Trend (Last 7 Days)
        </h2>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '15px', height: '150px' }}>
          {wellness.map((val, i) => {
            const height = (val / 5) * 100;
            const color = val <= 2 ? '#fe3292' : val === 3 ? '#ffba1a' : '#43ea8f';
            return (
              <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div style={{ fontSize: '0.85rem', color, fontWeight: 'bold' }}>{val}</div>
                <div style={{ width: '100%', height: `${height}%`, minHeight: '10px', background: color, borderRadius: '6px 6px 0 0', transition: 'height 0.3s' }}></div>
                <div style={{ fontSize: '0.75rem', color: '#7a8194', marginTop: '5px' }}>
                  Day {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Subject Breakdown */}
      <div style={{ background: '#18192b', padding: '25px', borderRadius: '12px', border: '1px solid #232942' }}>
        <h2 style={{ fontSize: '1.3rem', marginBottom: '20px', color: '#c4d7fd' }}>
          📚 Subject Progress Breakdown
        </h2>
        {subjects.slice(0, 10).map((subj, i) => {
          const percent = subj.mcqTotal > 0 ? Math.round((subj.mcqDone / subj.mcqTotal) * 100) : 0;
          return (
            <div key={i} style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#b8cdf1', fontWeight: 'bold' }}>{subj.name}</span>
                <span style={{ color: '#7a8194' }}>{subj.mcqDone} / {subj.mcqTotal} ({percent}%)</span>
              </div>
              <div style={{ background: '#151624', borderRadius: '8px', padding: '4px', height: '20px' }}>
                <div style={{ height: '100%', width: `${percent}%`, background: subj.color || '#2352a1', borderRadius: '6px', transition: 'width 0.5s' }}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
