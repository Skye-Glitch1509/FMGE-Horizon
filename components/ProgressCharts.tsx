'use client';
import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface Subject {
  name: string;
  mcqTotal: number;
  mcqDone: number;
  completed: boolean;
  mcqSessions: { date: string; amount: number }[];
}

interface ProgressChartsProps {
  subjects: Subject[];
  streak: number;
  wellness: number[];
}

export default function ProgressCharts({ subjects, streak, wellness }: ProgressChartsProps) {
  // MCQ Progress Chart Data
  const mcqData = subjects.map(s => ({
    name: s.name.substring(0, 10),
    done: s.mcqDone,
    total: s.mcqTotal,
    percentage: s.mcqTotal > 0 ? Math.round((s.mcqDone / s.mcqTotal) * 100) : 0,
  }));

  // Streak Progress Chart (last 7 days)
  const streakData = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - i));
    return {
      date: date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      streak: i < 7 ? streak - (6 - i) : 0,
    };
  });

  // Subject Completion Pie Chart
  const completedCount = subjects.filter(s => s.completed).length;
  const incompleteCount = subjects.length - completedCount;
  const pieData = [
    { name: 'Completed', value: completedCount, fill: '#43ea8f' },
    { name: 'Incomplete', value: incompleteCount, fill: '#fe3292' },
  ];

  // Wellness Trend (last 7 days)
  const wellnessData = wellness.map((val, i) => ({
    day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i],
    wellness: val,
  }));

  const COLORS = ['#2352a1', '#43ea8f', '#ffba1a', '#29feef', '#f5c500', '#fe3292', '#abd6ff'];

  return (
    <div style={{
      width: '100%',
      maxWidth: '740px',
      margin: '20px auto',
      padding: '20px',
      background: '#151624',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(50,80,120,0.10)',
    }}>
      <h2 style={{ color: '#c4d7fd', fontSize: '1.4rem', marginBottom: '20px', fontWeight: '800' }}>
        📊 Progress Analytics
      </h2>

      {/* MCQ Progress by Subject */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#c4d7fd', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '700' }}>
          📝 MCQ Progress by Subject
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mcqData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="name" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" />
            <Tooltip
              contentStyle={{ background: '#18192b', border: '1px solid #232942', borderRadius: '8px', color: '#efeff5' }}
              cursor={{ fill: 'rgba(35, 82, 161, 0.1)' }}
            />
            <Legend wrapperStyle={{ color: '#c4d7fd' }} />
            <Bar dataKey="done" fill="#43ea8f" name="MCQs Done" />
            <Bar dataKey="total" fill="#2352a1" name="MCQs Total" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Streak Trend */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#c4d7fd', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '700' }}>
          🔥 Study Streak Trend
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={streakData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="date" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" />
            <Tooltip
              contentStyle={{ background: '#18192b', border: '1px solid #232942', borderRadius: '8px', color: '#efeff5' }}
              cursor={{ fill: 'rgba(35, 82, 161, 0.1)' }}
            />
            <Line
              type="monotone"
              dataKey="streak"
              stroke="#ffba1a"
              strokeWidth={3}
              dot={{ fill: '#ffba1a', r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Subject Completion */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#c4d7fd', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '700' }}>
          ✅ Subject Completion Status
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ background: '#18192b', border: '1px solid #232942', borderRadius: '8px', color: '#efeff5' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Wellness Trend */}
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#c4d7fd', fontSize: '1.1rem', marginBottom: '12px', fontWeight: '700' }}>
          🧠 Weekly Wellness Trend
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={wellnessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="day" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" domain={[0, 5]} />
            <Tooltip
              contentStyle={{ background: '#18192b', border: '1px solid #232942', borderRadius: '8px', color: '#efeff5' }}
              cursor={{ fill: 'rgba(35, 82, 161, 0.1)' }}
            />
            <Bar
              dataKey="wellness"
              fill="#29feef"
              name="Wellness Score"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '12px',
        marginTop: '20px',
      }}>
        <div style={{
          background: '#18192b',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #232942',
          textAlign: 'center',
        }}>
          <div style={{ color: '#b8cdf1', fontSize: '0.9rem', marginBottom: '4px' }}>Completed</div>
          <div style={{ color: '#43ea8f', fontSize: '1.3rem', fontWeight: 'bold' }}>
            {completedCount} / {subjects.length}
          </div>
        </div>
        <div style={{
          background: '#18192b',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #232942',
          textAlign: 'center',
        }}>
          <div style={{ color: '#b8cdf1', fontSize: '0.9rem', marginBottom: '4px' }}>Current Streak</div>
          <div style={{ color: '#ffba1a', fontSize: '1.3rem', fontWeight: 'bold' }}>
            {streak} 🔥
          </div>
        </div>
        <div style={{
          background: '#18192b',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #232942',
          textAlign: 'center',
        }}>
          <div style={{ color: '#b8cdf1', fontSize: '0.9rem', marginBottom: '4px' }}>Avg Wellness</div>
          <div style={{ color: '#29feef', fontSize: '1.3rem', fontWeight: 'bold' }}>
            {(wellness.reduce((a, b) => a + b, 0) / wellness.length).toFixed(1)} / 5
          </div>
        </div>
      </div>
    </div>
  );
}
