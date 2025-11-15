"use client";
import React, { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    pain: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replace with API integration here (Supabase, Firebase, etc)
    setSubmitted(true);
  }

  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      maxWidth: "500px",
      margin: "0 auto",
      padding: "32px"
    }}>
      <h1 style={{ fontWeight: "800", fontSize: "2.2rem", marginBottom: "18px" }}>
        Smarter FMGE Prep—Built by FMGE Students, for FMGE Students
      </h1>
      <h2 style={{ fontWeight: "500", fontSize: "1.2rem", marginBottom: "18px" }}>
        A platform to organize, track, and master all your FMGE study resources—without switching apps or paying thousands.
      </h2>
      <p style={{ marginBottom: "20px", color: "#0a56a7", fontWeight: "bold" }}>
        Created by a current FMGE student who knows exactly how overwhelming preparation can feel.
      </p>
      <ul style={{ marginBottom: "28px" }}>
        <li>Supercharge your existing notes, MCQs, and videos—don’t start over, get more out of what you already use.</li>
        <li>Effortless Study Tracking: Know what you’ve covered, what’s left, and when to review—across any platform.</li>
        <li>AI-Powered FMGE Planner: Automatically balance your prep for all 19 subjects and paper patterns, customized to you.</li>
        <li>Spaced Repetition Engine: Retain key facts with science-backed review scheduling (integrates with your notes/flashcards).</li>
        <li>Burnout-Prevention & Accountability: Anonymous check-ins, study partners, and a supportive peer community.</li>
        <li>FMGE-Specific Analytics: See benchmarks, track your progress vs. other students, spot weak areas instantly.</li>
        <li>Built for privacy, mobile, and zero cost.</li>
      </ul>
      {submitted ? (
        <div style={{ color: "green", fontWeight: "bold", fontSize: "1.1rem" }}>
          🎉 Thank you for signing up! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "12px" }}>
            <label>Name:</label><br />
            <input
              style={{ width: "100%", padding: "8px", marginTop: "3px" }}
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label>Email or WhatsApp number:</label><br />
            <input
              style={{ width: "100%", padding: "8px", marginTop: "3px" }}
              name="contact"
              required
              value={form.contact}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "12px" }}>
            <label>
              What is the single biggest pain point you face in FMGE preparation right now?
            </label><br />
            <input
              style={{ width: "100%", padding: "8px", marginTop: "3px" }}
              name="pain"
              required
              value={form.pain}
              onChange={handleChange}
              maxLength={100}
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#0a56a7",
              color: "white",
              padding: "10px 18px",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1rem",
              marginTop: "8px"
            }}
          >
            Sign Up for Early Access
          </button>
        </form>
      )}
      <div style={{
        marginTop: "36px",
        fontStyle: "italic",
        fontSize: "1rem",
        color: "#444"
      }}>
        No more switching tabs or feeling lost. Prep with clarity, confidence, and a platform that finally understands FMGE.
      </div>
    </div>
  );
}
