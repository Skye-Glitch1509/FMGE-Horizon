"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { psychiatryQuestions } from "../lib/psychiatryQuestions";
import { psmQuestions } from "../lib/psmQuestions";
import { anesthesiaQuestions } from "../lib/anesthesiaQuestions";
// ...import other subjects as needed

import { FMGEMCQ } from "../lib/types";

const allQuestions: FMGEMCQ[] = [
  ...psychiatryQuestions,
  ...psmQuestions,
  ...anesthesiaQuestions
  // ...add more subjects here with "..."
];

function getTodayKey() {
  const now = new Date();
  return `dailySet-${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}
function getYesterdayKey() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return `dailySet-${yesterday.getFullYear()}-${yesterday.getMonth()}-${yesterday.getDate()}`;
}

function getDailySetNonRepeating(all: FMGEMCQ[], count: number, excludeIds: string[] = []) {
  // Filter out yesterday's ids
  const filtered = all.filter(q => !excludeIds.includes(q.id));
  // If you run out because pool is small, falls back to what it can get
  return filtered.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function DailyQuestionSet() {
  const [questions, setQuestions] = useState<FMGEMCQ[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const todayKey = getTodayKey();
    const yesterdayKey = getYesterdayKey();

    const savedToday = window.localStorage.getItem(todayKey);
    let dailySet: FMGEMCQ[] = [];

    if (savedToday) {
      dailySet = JSON.parse(savedToday);
    } else {
      let excludeIds: string[] = [];
      const savedYesterday = window.localStorage.getItem(yesterdayKey);
      if (savedYesterday) {
        excludeIds = JSON.parse(savedYesterday).map((q: FMGEMCQ) => q.id);
      }
      dailySet = getDailySetNonRepeating(allQuestions, 5, excludeIds);
      window.localStorage.setItem(todayKey, JSON.stringify(dailySet));
    }

    setQuestions(dailySet);
    setAnswers(Array(dailySet.length).fill(null));
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ padding: "40px", textAlign: "center", color: "#43ea8f" }}>Loading questions...</div>;

  function handleAnswer(qIdx: number, ansIdx: number) {
    if (answers[qIdx] !== null) return;
    const updated = [...answers];
    updated[qIdx] = ansIdx;
    setAnswers(updated);
  }

  const score = answers.filter((ans, idx) => ans === questions[idx]?.correctIndex).length;
  const uniqueTopics = Array.from(new Set(questions.flatMap(q => q.topicsCovered)));

  return (
    <div style={{
      maxWidth: 700,
      margin: "40px auto",
      background: "#232942",
      borderRadius: 18,
      padding: 32,
      color: "white"
    }}>
      <h2 style={{ marginBottom: 18, fontWeight: "bold", color: "#43ea8f" }}>Daily FMGE Question Set</h2>
      {!showSummary ? questions.map((q, i) => (
        <div key={q.id} style={{ marginBottom: 36 }}>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>
            {`Q${i + 1}: ${q.question}`}
            {q.year && (
              <span style={{ color: "#b8cdf1", fontSize: "0.9rem", marginLeft: 10 }}>
                ({q.year}{q.examSession ? ` - ${q.examSession}` : ""})
              </span>
            )}
          </div>
          <div>
            {q.options.map((opt, idx) => {
              // Red/green highlight logic
              let bg = "#292d42";
              if (answers[i] !== null) {
                if (answers[i] === q.correctIndex && idx === answers[i]) {
                  bg = "#43ea8f"; // selected & correct
                } else if (answers[i] !== q.correctIndex && idx === answers[i]) {
                  bg = "#ff4646"; // selected & wrong
                } else if (answers[i] !== q.correctIndex && idx === q.correctIndex) {
                  bg = "#43ea8f"; // correct answer for wrong submission
                }
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(i, idx)}
                  disabled={answers[i] !== null}
                  style={{
                    width: "100%",
                    marginBottom: 8,
                    padding: "12px 15px",
                    background: bg,
                    color: bg === "#292d42" ? "#efeff5" : "#232942",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: 500,
                    cursor: answers[i] !== null ? "not-allowed" : "pointer",
                    transition: "background 0.2s"
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {answers[i] !== null && (
            <div style={{ marginTop: 9 }}>
              <div style={{
                fontWeight: 700,
                color: answers[i] === q.correctIndex ? "#43ea8f" : "#ff4646"
              }}>
                {answers[i] === q.correctIndex ? "✓ Correct!" : "✗ Incorrect"}
              </div>
              <div style={{ color: "#b8cdf1", marginTop: 1 }}>
                <strong>Explanation:</strong> {q.explanation}
              </div>
            </div>
          )}
        </div>
      )) : null}

      {!showSummary && answers.every(a => a !== null) && (
        <button
          style={{
            marginTop: 18,
            padding: "13px 32px",
            background: "linear-gradient(135deg, #2352a1, #43ea8f)",
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
            fontSize: "1rem",
            border: "none",
            cursor: "pointer",
            width: "100%"
          }}
          onClick={() => setShowSummary(true)}
        >
          Finish & View Summary
        </button>
      )}

      {showSummary && (
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <h3 style={{ color: "#43ea8f", marginBottom: 12 }}>Quiz Complete! 🎉</h3>
          <div style={{ fontSize: "32px", fontWeight: "bold", color: "#43ea8f", marginBottom: 12 }}>
            Score: {score}/{questions.length}
          </div>
          <h4 style={{ marginTop: 24, marginBottom: 12, color: "#efeff5" }}>Topics Covered:</h4>
          <div style={{ marginBottom: 20 }}>
            {uniqueTopics.map(slug => (
              <span key={slug} style={{
                display: "inline-block",
                background: "#43ea8f",
                color: "#11131c",
                padding: "4px 13px",
                borderRadius: "8px",
                margin: "6px",
                fontWeight: "bold",
                fontSize: "0.9rem"
              }}>
                {slug}
              </span>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: "20px", background: "#292d42", borderRadius: "12px" }}>
            <p style={{ color: "#b8cdf1", fontSize: "18px", marginBottom: 12 }}>
              Thank you for practicing! Come back tomorrow for a fresh set of questions.
            </p>
            <Link
              href="/"
              style={{
                padding: "12px 32px",
                borderRadius: "9px",
                background: "linear-gradient(135deg, #2352a1, #43ea8f)",
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "8px"
              }}
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
