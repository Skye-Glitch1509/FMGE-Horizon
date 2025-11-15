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
      background: "linear-gradient(145deg, #121421 0%, #23263b 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        maxWidth: "470px",
        background: "#181c2f",
        boxShadow: "0 8px 28px 0 rgba(34, 70, 190, 0.11)",
        borderRadius: "20px",
        marginTop: "54px",
        marginBottom: "32px",
        padding: "40px 28px 32px 28px",
        border: "1px solid #262b47"
      }}>
        <h1 style={{
          fontWeight: "800",
          fontSize: "2.15rem",
          letterSpacing: "-1px",
          color: "#a6c7ff",
          marginBottom: "18px"
        }}>
          🗺️ FMGE Horizon
        </h1>
        <h2 style={{
          fontWeight: "500",
          fontSize: "1.22rem",
          color: "#d0d8ed",
          marginBottom: "18px"
        }}>
          Prep with clarity, hope, and order—not chaos.
        </h2>
        <div style={{
          background: "#263469",
          color: "#79a6ff",
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
          paddingLeft: "24px",
          color: "#eaeefa"
        }}>
          <li style={{marginBottom:"7px"}}>✅ Get more out of what you already use—no need to start over.</li>
          <li style={{marginBottom:"7px"}}>📈 Track what’s done, what’s next, and when to review.</li>
          <li style={{marginBottom:"7px"}}>🧠 Personalized, AI-powered session planner.</li>
          <li style={{marginBottom:"7px"}}>⏰ Spaced repetition for high-yield recall.</li>
          <li style={{marginBottom:"7px"}}>🤝 Burnout checks, accountability, peer support.</li>
          <li style={{marginBottom:"7px"}}>🔎 FMGE-specific analytics.</li>
        </ul>
        <hr style={{margin:"18px 0", borderColor:"#23263b"}} />
        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ marginBottom: "10px", marginTop: "10px" }}>
            <div style={{ marginBottom: "14px" }}>
              <label style={{fontWeight:"500", color:"#c7dafb"}}>Name:</label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#131629",
                  color: "#e1e7fa",
                  borderRadius: "6px",
                  border: "1px solid #393e60"
                }}
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div style={{ marginBottom: "14px" }}>
              <label style={{fontWeight:"500", color:"#c7dafb"}}>Email or WhatsApp number:</label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#131629",
                  color: "#e1e7fa",
                  borderRadius: "6px",
                  border: "1px solid #393e60"
                }}
                name="contact"
                required
                value={form.contact}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{fontWeight:"500", color:"#c7dafb"}}>
                What’s your biggest FMGE pain point right now?
              </label><br />
              <input
                style={{
                  width: "100%",
                  padding: "9px",
                  marginTop: "5px",
                  background: "#131629",
                  color: "#e1e7fa",
                  borderRadius: "6px",
                  border: "1px solid #393e60"
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
                background: "#3292fe",
                color: "white",
                padding: "13px 29px",
                border: "none",
                borderRadius: "7px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "1.09rem",
                marginTop: "2px",
                boxShadow: "0 4px 14px 0 rgba(50,146,254,0.08)",
                letterSpacing: "0.7px"
              }}
            >
              🚀 Get Early Access
            </button>
          </form>
        ) : (
          <div style={{ color: "#16c872", fontWeight: "bold", fontSize: "1.1rem", marginBottom: "20px", textAlign: "center" }}>
            🎉 Thank you for signing up! We'll be in touch soon.
          </div>
        )}
      </div>
      <div style={{
        maxWidth: "420px",
        fontStyle: "italic",
        fontSize: "1.09rem",
        color: "#b8cdf1",
        background: "#131629",
        borderRadius: "10px",
        padding: "18px 14px",
        marginBottom: "36px",
        boxShadow: "0 2px 20px 0 rgba(50,146,254,0.03)",
        border: "1px solid #23263b"
      }}>
        No more switching tabs or feeling lost.<br />
        Discover clarity, community, and a platform that finally understands FMGE.
      </div>
    </div>
  );
}
