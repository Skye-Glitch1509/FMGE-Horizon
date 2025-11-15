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
    fetch("https://script.google.com/macros/s/AKfycbwyj5vYeCLiIpoeK55F2wcRuMcOWFQM6BeMi3q8Zii-mbtASE4ht06v8KsqFhKt2oY3xg/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        Name: form.name,
        Contact: form.contact,
        Pain_Point: form.pain
      })
    })
    .then(() => {
      setSubmitted(true);
    })
    .catch(() => {
      alert("Failed to register. Please try again!");
    });
  }

  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #e4ecfc 0%, #f6f6f6 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        maxWidth: "470px",
        background: "#fff",
        boxShadow: "0 8px 24px 0 rgba(34, 70, 190, 0.10)",
        borderRadius: "20px",
        marginTop: "50px",
        marginBottom: "30px",
        padding: "38px 28px",
        border: "1px solid #f2f7fd"
      }}>
        <h1 style={{
          fontWeight: "800",
          fontSize: "2.15rem",
          letterSpacing: "-1px",
          color: "#194bb2",
          marginBottom: "16px"
        }}>
          🗺️ FMGE Horizon
        </h1>
        <h2 style={{
          fontWeight: "500",
          fontSize: "1.22rem",
          color: "#444",
          marginBottom: "18px"
        }}>
          Prep with clarity, hope, and order—not chaos.
        </h2>
        <div style={{
          background: "#eff8ff",
          color: "#1769aa",
          fontWeight: "bold",
          padding: "12px 13px",
          borderRadius: "8px",
          marginBottom: "20px",
          fontSize: "1.05rem"
        }}>
          Made by a current FMGE student who understands the struggle.
        </div>
        <ul style={{
          marginBottom: "27px",
          fontSize: "1.1rem",
          lineHeight: 1.7,
          paddingLeft: "24px"
        }}>
          <li style={{marginBottom:"7px"}}>✅ Get more out of what you already use—no need to start over.</li>
          <li style={{marginBottom:"7px"}}>📈 Track what’s done, what’s next, and when to review.</li>
          <li style={{marginBottom:"7px"}}>🧠 Personalized, AI-powered session planner.</li>
          <li style={{marginBottom:"7px"}}>⏰ Spaced repetition for high-yield recall.</li>
          <li style={{marginBottom:"7px"}}>🤝 Burnout checks, accountability, peer support.</li>
          <li style={{marginBottom:"7px"}}>🔎 FMGE-specific analytics.</li>
        </ul>
        <hr style={{margin:"18px 0"}} />
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ marginBottom: "10px", marginTop: "10px" }}>
            <div style={{ marginBottom: "14px" }}>
              <label style={{fontWeight:"500"}}>Name:</label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#f8fafc",
                  color: "#2d2d2d",
                  borderRadius: "6px",
                  border: "1px solid #dbeafe"
                }}
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div style={{ marginBottom: "14px" }}>
              <label style={{fontWeight:"500"}}>Email or WhatsApp number:</label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#f8fafc",
                  color: "#2d2d2d",
                  borderRadius: "6px",
                  border: "1px solid #dbeafe"
                }}
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{fontWeight:"500"}}>
                What’s your biggest FMGE pain point right now?
              </label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#f8fafc",
                  color: "#2d2d2d",
                  borderRadius: "6px",
                  border: "1px solid #dbeafe"
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
                background: "#194bb2",
                color: "white",
                padding: "13px 29px",
                border: "none",
                borderRadius: "7px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1.09rem",
                marginTop: "2px",
                boxShadow: "0 4px 14px 0 rgba(25, 75, 178, 0.08)"
              }}
            >
              🚀 Get Early Access
            </button>
          </form>
        ) : (
          <div style={{ color: "green", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "20px", textAlign: "center" }}>
            🎉 Thank you for signing up! We'll be in touch soon.
          </div>
        )}
      </div>
      <div style={{
        maxWidth: "420px",
        fontStyle: "italic",
        fontSize: "1.09rem",
        color: "#426193",
        background: "#e8f0fe",
        borderRadius: "10px",
        padding: "18px 14px",
        marginBottom: "36px",
        boxShadow: "0 2px 20px 0 rgba(25, 75, 178, 0.05)"
      }}>
        No more switching tabs or feeling lost.<br />
        Discover clarity, community, and a platform that finally understands FMGE.
      </div>
    </div>
  );
}
