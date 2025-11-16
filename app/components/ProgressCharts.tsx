"use client";
import React from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

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
  mcqSessions: Array<{ date: string; amount: number }>;
}

interface ProgressChartsProps {
  subjects: Subject[];
  wellness: number[];
  streak: number;
  mcqGoal: number; // <-- FIXED: added this line
}

export default function ProgressCharts({
  subjects,
  wellness,
  streak,
  mcqGoal,
}: ProgressChartsProps) {
  // Chart 1: MCQ Progress by Subject
  const mcqData = subjects.map((s) => ({
    name: s.name,
    done: s.mcqDone,
    total: s.mcqTotal,
  }));

  // Chart 2: Streak Trend (last 7 days)
  const streakData = [
    { day: "Day 1", streak: Math.max(0, streak - 6) },
    { day: "Day 2", streak: Math.max(0, streak - 5) },
    { day: "Day 3", streak: Math.max(0, streak - 4) },
    { day: "Day 4", streak: Math.max(0, streak - 3) },
    { day: "Day 5", streak: Math.max(0, streak - 2) },
    { day: "Day 6", streak: Math.max(0, streak - 1) },
    { day: "Today", streak },
  ];

  // Chart 3: Subject Completion
  const completionData = [
    {
      name: "Completed",
      value: subjects.filter((s) => s.completed).length,
    },
    {
      name: "In Progress",
      value: subjects.filter((s) => !s.completed).length,
    },
  ];

  // Chart 4: Weekly Wellness Trend
  const wellnessData = wellness.map((w, i) => ({
    day: `Day ${i + 1}`,
    wellness: w,
  }));

  const COLORS = ["#43ea8f", "#2352a1", "#ffba1a", "#fe3292", "#29feef"];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
        gap: "30px",
        marginBottom: "40px",
      }}
    >
      {/* MCQ Chart */}
      <div
        style={{
          background: "#151624",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(34, 70, 190, 0.1)",
        }}
      >
        <h3 style={{ color: "#c4d7fd", marginBottom: "15px" }}>
          📝 MCQ Progress by Subject
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mcqData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="name" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" />
            <Tooltip
              contentStyle={{
                background: "#18192b",
                border: "1px solid #232942",
                color: "#efeff5",
              }}
            />
            <Legend />
            <Bar dataKey="done" fill="#43ea8f" name="Done" />
            <Bar dataKey="total" fill="#2352a1" name="Total" />
          </BarChart>
        </ResponsiveContainer>
        <div style={{marginTop: "12px", color: "#ffba1a", fontWeight: "bold"}}>
          📊 Your Weekly Goal: {mcqGoal} MCQs
        </div>
      </div>

      {/* Streak Chart */}
      <div
        style={{
          background: "#151624",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(34, 70, 190, 0.1)",
        }}
      >
        <h3 style={{ color: "#c4d7fd", marginBottom: "15px" }}>
          🔥 Study Streak Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={streakData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="day" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" />
            <Tooltip
              contentStyle={{
                background: "#18192b",
                border: "1px solid #232942",
                color: "#efeff5",
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="streak"
              stroke="#ffba1a"
              strokeWidth={2}
              name="Days"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Completion Chart */}
      <div
        style={{
          background: "#151624",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(34, 70, 190, 0.1)",
        }}
      >
        <h3 style={{ color: "#c4d7fd", marginBottom: "15px" }}>
          ✅ Subject Completion Status
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={completionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {completionData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#18192b",
                border: "1px solid #232942",
                color: "#efeff5",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Wellness Chart */}
      <div
        style={{
          background: "#151624",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(34, 70, 190, 0.1)",
        }}
      >
        <h3 style={{ color: "#c4d7fd", marginBottom: "15px" }}>
          🧠 Weekly Wellness Trend
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={wellnessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#232942" />
            <XAxis dataKey="day" stroke="#b8cdf1" />
            <YAxis stroke="#b8cdf1" domain={[0, 5]} />
            <Tooltip
              contentStyle={{
                background: "#18192b",
                border: "1px solid #232942",
                color: "#efeff5",
              }}
            />
            <Legend />
            <Bar dataKey="wellness" fill="#29feef" name="Wellness Score" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
