"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    pain: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Save logic will go here (see below for Google Sheets guide)
    setSubmitted(true);
  }

  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      maxWidth: "560px",
      margin: "0 auto",
      padding: "32px 12px"
    }}>
      <h1 style={{
        fontWeight: "800",
        fontSize: "2.5rem",
        marginBottom: "20px",
        lineHeight: 1.2
      }}>
        Smarter FMGE Prep<br />Bring Clarity & Hope to Your Journey
      </h1>
      <h2 style={{
        fontWeight: "500",
        fontSize: "1.3rem",
        marginBottom: "22px",
        lineHeight: 1.35
      }}>
        Organize, track, and master all your FMGE study resources—with zero confusion and no switching apps.
      </h2>
      <p style={{
        marginBottom: "25px",
        color: "#1769aa",
        fontWeight: "bold",
        background: "#eaf3fa",
        padding: "12px 15px",
        borderRadius: "8px",
      }}>
        Created by a current FMGE student who knows exactly how overwhelming preparation can feel.
      </p>
      <ul style={{
        marginBottom: "34px",
        fontSize: "1rem",
        lineHeight: 1.7,
        paddingLeft: "20px"
      }}>
        <li style={{marginBottom:"9px"}}>Supercharge the tools you already use—no need to start over.</li>
        <li style={{marginBottom:"9px"}}>Study Tracking: Know what's done, what's left, when to review.</li>
        <li style={{marginBottom:"9px"}}>AI-Powered Planner: Personalized sessions for every FMGE topic.</li>
        <li style={{marginBottom:"9px"}}>Spaced Repetition Engine: Never forget high-yield facts.</li>
        <li style={{marginBottom:"9px"}}>Burnout Checks, Accountability, Peer Support.</li>
        <li style={{marginBottom:"9px"}}>FMGE-Specific Analytics & Weak Area Spotting.</li>
        <li style={{marginBottom:"9px"}}>Mobile-friendly, private, and totally free.</li>
      </ul>
      {submitted ? (
        <div style={{ color: "green", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "30px" }}>
          🎉 Thank you for signing up! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
          <div style={{ marginBottom: "15px" }}>
            <label>Name:</label><br />
            <input
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "3px",
                background: "white",
                color: "#2d2d2d",
                borderRadius: "6px",
                border: "1px solid #aaa"
              }}
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>Email or WhatsApp number:</label><br />
            <input
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "3px",
                background: "white",
                color: "#2d2d2d",
                borderRadius: "6px",
                border: "1px solid #aaa"
              }}
              name="contact"
              required
              value={form.contact}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label>
              What is the single biggest pain point you face in FMGE preparation right now?
            </label><br />
            <input
              style={{
                width: "100%",
                padding: "8px",
                marginTop: "3px",
                background: "white",
                color: "#2d2d2d",
                borderRadius: "6px",
                border: "1px solid #aaa"
              }}
              name="pain"
              required
              value={form.pain}
              onChange={handleChange}
              maxLength={100}
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            style={{
              background: "#1769aa",
              color: "white",
              padding: "11px 22px",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: "1.1rem",
              marginTop: "10px"
            }}
          >
            Sign Up for Early Access
          </button>
        </form>
      )}
      <div style={{
        marginTop: "10px",
        fontStyle: "italic",
        fontSize: "1.06rem",
        color: "#444"
      }}>
        No more switching tabs or feeling lost.<br />
        Prep with clarity, hope, and a platform that finally understands FMGE.
      </div>
    </div>
  );
}
