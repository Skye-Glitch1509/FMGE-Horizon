"use client";
import React, { useState, FormEvent, useEffect } from "react";
import { supabase } from "./lib/supabaseClient";

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

export default function Home() {
  const [subjects, setSubjects] = useState<Subject[]>([
    {
      name: "Anatomy", deadline: "2025-11-25", completed: false, note: "",
      priority: false, tag: "exam", color: "#2352a1", mcqTotal: 1000, mcqDone: 150,
      resource: "BRS Anatomy", resourceRating: 4,
      mcqSessions: [{ date: todayISO(), amount: 150 }]
    }
  ]);
  const [newSubject, setNewSubject] = useState("");
  const [newDeadline, setNewDeadline] = useState("");
  const [newNote, setNewNote] = useState("");
  const [newPriority, setNewPriority] = useState(false);
  const [newTag, setNewTag] = useState("exam");
  const [newColor, setNewColor] = useState("#2352a1");
  const [newMcqTotal, setNewMcqTotal] = useState(0);
  const [newMcqDone, setNewMcqDone] = useState(0);
  const [newResource, setNewResource] = useState("");
  const [newResourceRating, setNewResourceRating] = useState(0);
  const [goal, setGoal] = useState("Study at least 2 hours/day, complete 200 MCQs/week");
  const [streak, setStreak] = useState(0);
  const [todayStudied, setTodayStudied] = useState(false);
  const [wellness, setWellness] = useState<number[]>([3, 3, 3, 3, 3, 3, 3]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editFields, setEditFields] = useState<Partial<Subject>>({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [syncStatus, setSyncStatus] = useState("Not synced");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Analytics
  const totalSubjects = subjects.length;
  const completedSubjects = subjects.filter(s => s.completed).length;
  const totalMCQ = subjects.reduce((sum, s) => sum + s.mcqTotal, 0);
  const doneMCQ = subjects.reduce((sum, s) => sum + s.mcqDone, 0);

  // Load from LocalStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("plannerData");
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setSubjects(parsed.subjects || []);
        setGoal(parsed.goal || "Study at least 2 hours/day, complete 200 MCQs/week");
        setStreak(parsed.streak || 0);
        setWellness(parsed.wellness || [3, 3, 3, 3, 3, 3, 3]);
      } catch (err) {
        console.log("Could not load from localStorage");
      }
    }
  }, []);

  // Check if user is logged in
  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) {
          console.error("Auth error:", error);
          return;
        }
        if (user) {
          setIsLoggedIn(true);
          setUser(user);
          loadFromCloud(user.id);
        }
      } catch (err) {
        console.error("Error checking user:", err);
      }
    };
    checkUser();
  }, []);

  // Save to LocalStorage whenever subjects change
  useEffect(() => {
    const dataToSave = { subjects, goal, streak, wellness };
    localStorage.setItem("plannerData", JSON.stringify(dataToSave));
    
    // If logged in, also sync to cloud
    if (isLoggedIn && user) {
      saveToCloud(user.id);
    }
  }, [subjects, goal, streak, wellness, isLoggedIn, user]);

  // CLOUD FUNCTIONS
  async function saveToCloud(userId: string) {
    setSyncStatus("Syncing");
    try {
      const { data, error } = await supabase
        .from("planner_data")
        .upsert(
          {
            user_id: userId,
            subjects,
            goal,
            streak,
            wellness,
            updated_at: new Date().toISOString()
          },
          { onConflict: "user_id" }
        );
      
      if (error) {
        console.error("Cloud save error:", error);
        setSyncStatus("Not synced");
      } else {
        console.log("Cloud save successful:", data);
        setSyncStatus("Synced");
      }
    } catch (err) {
      console.error("Cloud save exception:", err);
      setSyncStatus("Not synced");
    }
  }

  async function loadFromCloud(userId: string) {
    try {
      const { data, error } = await supabase
        .from("planner_data")
        .select("*")
        .eq("user_id", userId)
        .single();
      
      if (error) {
        if (error.code === "PGRST116") {
          console.log("No existing data in cloud for this user");
          setSyncStatus("Not synced");
        } else {
          console.error("Cloud load error:", error);
          setSyncStatus("Not synced");
        }
        return;
      }

      if (data) {
        setSubjects(data.subjects || []);
        setGoal(data.goal || "Study at least 2 hours/day, complete 200 MCQs/week");
        setStreak(data.streak || 0);
        setWellness(data.wellness || [3, 3, 3, 3, 3, 3, 3]);
        console.log("Cloud load successful");
        setSyncStatus("Synced");
      }
    } catch (err) {
      console.error("Cloud load exception:", err);
      setSyncStatus("Not synced");
    }
  }

  async function handleSignUp() {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("Sign up error: " + error.message);
    } else {
      alert("Sign up successful! Please check your email to confirm.");
      setEmail("");
      setPassword("");
    }
  }

  async function handleLogin() {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login error: " + error.message);
    } else {
      setIsLoggedIn(true);
      setUser(data.user);
      setEmail("");
      setPassword("");
      loadFromCloud(data.user.id);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setUser(null);
  }

  // PLANNER FUNCTIONS
  function handleAddSubject(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!newSubject.trim() || !newDeadline.trim()) return;
    setSubjects([
      ...subjects,
      {
        name: newSubject,
        deadline: newDeadline,
        completed: false,
        note: newNote,
        priority: newPriority,
        tag: newTag,
        color: newColor,
        mcqTotal: newMcqTotal,
        mcqDone: newMcqDone,
        resource: newResource,
        resourceRating: newResourceRating,
        mcqSessions: newMcqDone > 0 ? [{ date: todayISO(), amount: newMcqDone }] : []
      }
    ]);
    setNewSubject(""); setNewDeadline(""); setNewNote(""); setNewPriority(false);
    setNewTag("exam"); setNewColor("#2352a1");
    setNewMcqTotal(0); setNewMcqDone(0); setNewResource(""); setNewResourceRating(0);
  }
  function handleRemove(i: number) { setSubjects(subjects.filter((_, idx) => idx !== i)); }
  function handleToggleComplete(i: number) {
    setSubjects(subjects.map((subj, idx) =>
      idx === i ? { ...subj, completed: !subj.completed } : subj
    ));
  }
  function handleAddMCQ(i: number, val: number) {
    setSubjects(subjects.map((subj, idx) =>
      idx === i
        ? {
          ...subj,
          mcqDone: Math.min(subj.mcqTotal, subj.mcqDone + val),
          mcqSessions: [
            ...subj.mcqSessions,
            { date: todayISO(), amount: val }
          ]
        } : subj
    ));
  }
  function handleMCQDoneInput(i: number, value: number) {
    setSubjects(subjects.map((subj, idx) =>
      idx === i
        ? {
          ...subj,
          mcqDone: value,
          mcqSessions: value !== subj.mcqDone
            ? [
              ...subj.mcqSessions,
              { date: todayISO(), amount: value - subj.mcqDone }
            ]
            : subj.mcqSessions
        } : subj
    ));
  }
  function handleEditStart(i: number) { setEditIndex(i); setEditFields({ ...subjects[i] }); }
  function handleEditChange(field: keyof Subject, value: any) { setEditFields({ ...editFields, [field]: value }); }
  function handleEditSave(i: number) { 
    setSubjects(subjects.map((subj, idx) => idx === i ? { ...subj, ...editFields } : subj)); 
    setEditIndex(null); 
  }
  function handleLogStreak() { if (!todayStudied) { setStreak(s => s + 1); setTodayStudied(true); } }
  function handleWellnessChange(val: number) { setWellness(arr => [...arr.slice(1), val]); }
  const today = new Date();
  function deadlineStatus(deadline: string) {
    const date = new Date(deadline);
    const diff = Math.floor((date.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    if (diff < 0) return "Past due";
    if (diff === 0) return "Due today";
    if (diff <= 7) return "Due soon";
    return "";
  }

  return (
    <div style={{
      fontFamily: "Inter, Arial, sans-serif",
      minHeight: "100vh",
      background: "#11131c", display: "flex", flexDirection: "column", alignItems: "center"
    }}>
      <div style={{
        width: "100%", maxWidth: "740px", marginTop: "40px", marginBottom: "20px",
        padding: "32px 32px", background: "#151624", borderRadius: "22px",
        boxShadow: "0 14px 39px 0 rgba(34, 70, 190, 0.13)"
      }}>
        {/* LOGIN/SIGNUP SECTION */}
        <div style={{ marginBottom: "20px", padding: "15px", background: "#18192b", borderRadius: "12px" }}>
          {!isLoggedIn ? (
            <div>
              <h3 style={{ color: "#c4d7fd", marginBottom: "10px" }}>☁️ Cloud Sync (Optional)</h3>
              <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #232942", background: "#151624", color: "#efeff5" }}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "1px solid #232942", background: "#151624", color: "#efeff5" }}
                />
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={handleLogin} style={{ flex: 1, padding: "8px", background: "#2352a1", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Login</button>
                <button onClick={handleSignUp} style={{ flex: 1, padding: "8px", background: "#43ea8f", color: "black", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Sign Up</button>
              </div>
              <div style={{ fontSize: "0.9rem", color: "#abd6ff", marginTop: "8px" }}>💡 Optional: Sign up to sync across devices!</div>
            </div>
          ) : (
            <div>
              <div style={{ color: "#c4d7fd", fontWeight: "bold" }}>✅ Logged in as: <span style={{ color: "#43ea8f" }}>{user?.email}</span></div>
              <div style={{ color: syncStatus === "Synced" ? "#43ea8f" : "#ffba1a", fontSize: "0.9rem", marginTop: "4px" }}>Sync Status: {syncStatus}</div>
              <button onClick={handleLogout} style={{ marginTop: "10px", padding: "6px 12px", background: "#fe3292", color: "white", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}>Logout</button>
            </div>
          )}
        </div>

        <h1 style={{ color: "#c4d7fd", fontWeight: "900", fontSize: "2.08rem", marginBottom: "11px", letterSpacing: "-1.5px" }}>
          🚀 FMGE Planner Dashboard
        </h1>
        <div style={{ color: "#43ea8f", fontWeight: "bold", fontSize: "1.08rem", marginBottom: "12px" }}>
          🎯 <span>Goal:</span> <span style={{ color: "#eaeefa", fontWeight: "normal" }}>{goal}</span>
        </div>
        <input style={{
          width: "99.5%", background: "#18192b", color: "#eaeefa", padding: "11px",
          border: "1.3px solid #232942", borderRadius: "8px", marginBottom: "17px", fontSize: "1.06rem"
        }} value={goal} onChange={e => setGoal(e.target.value)} />
        <div style={{ display: "flex", gap: "19px", marginBottom: "18px" }}>
          <div style={{ flex: 1, background: "#18192b", padding: "13px", borderRadius: "13px" }}>
            <div style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.06rem" }}>📈 Subject Progress</div>
            <div style={{ background: "#151624", borderRadius: "8px", padding: "7px", marginTop: "9px" }}>
              <div style={{
                height: "16px",
                backgroundColor: "#2352a1", width: `${(completedSubjects / totalSubjects * 100) || 0}%`,
                borderRadius: "8px", transition: "width 0.3s"
              }}></div>
            </div>
            <div style={{ fontSize: "0.96rem", marginTop: "5px" }}>{completedSubjects} / {totalSubjects} completed</div>
          </div>
          <div style={{ flex: 1, background: "#18192b", padding: "13px", borderRadius: "13px" }}>
            <div style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.06rem" }}>📝 MCQ Progress</div>
            <div style={{ background: "#151624", borderRadius: "8px", padding: "7px", marginTop: "9px" }}>
              <div style={{
                height: "16px",
                background: "#252942", width: `${(doneMCQ / totalMCQ * 100) || 0}%`,
                borderRadius: "8px", transition: "width 0.3s"
              }}></div>
            </div>
            <div style={{ fontSize: "0.96rem", marginTop: "5px" }}>{doneMCQ} / {totalMCQ} MCQs done</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "13px", gap: "18px" }}>
          <div style={{ background: "#18192b", borderRadius: "10px", padding: "10px 15px", flex: 1.2, minHeight: "58px" }}>
            <b>🔥 Daily Study Streak:</b>
            <span style={{ color: "#43ea8f", fontSize: "1.12rem", marginLeft: "4px" }}>{streak} days</span>
            <button style={{
              marginLeft: "14px", background: "#2352a1", color: "#fff", borderRadius: "7px",
              border: "none", padding: "6px 13px", fontWeight: "bold", fontSize: "1.04rem", boxShadow: "0 1px 13px #23263b22",
              cursor: todayStudied ? "not-allowed" : "pointer", opacity: todayStudied ? 0.7 : 1, transition: "background 0.12s"
            }}
              onClick={handleLogStreak}
              disabled={todayStudied}
            >+ Log</button>
          </div>
          <div style={{ background: "#18192b", borderRadius: "10px", padding: "10px 15px", flex: 1, minHeight: "58px" }}>
            <b>🧠 Wellness:</b>
            {wellness.map((val, i) =>
              <span key={i} style={{
                display: "inline-block", marginLeft: "2px",
                color: val <= 2 ? "#fe3292" : val == 3 ? "#ffba1a" : "#43ea8f", fontSize: "1.11rem"
              }}>●</span>
            )}
            <select style={{ marginLeft: "7px", fontSize: "1.05rem", borderRadius: "5px", padding: "2px 7px" }}
              onChange={e => handleWellnessChange(Number(e.target.value))}
              defaultValue="">
              <option value="" disabled>Day</option>
              <option value={1}>😥</option>
              <option value={2}>😐</option>
              <option value={3}>🙂</option>
              <option value={4}>😊</option>
              <option value={5}>😁</option>
            </select>
          </div>
        </div>
        {/* FORM */}
        <form onSubmit={handleAddSubject} style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "18px", marginBottom: "27px", alignItems: "end",
          background: "#18192b", borderRadius: "16px", padding: "20px 20px"
        }}>
          <div style={{ gridColumn: "span 2" }}>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Subject Name 📝</label>
            <input style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} placeholder="e.g. Pathology" value={newSubject} onChange={e => setNewSubject(e.target.value)} required />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Deadline 📅</label>
            <input type="date" style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} value={newDeadline} onChange={e => setNewDeadline(e.target.value)} required />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Type/Tag 🏷️</label>
            <select value={newTag} style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} onChange={e => setNewTag(e.target.value)}>
              <option value="exam">Exam</option>
              <option value="revision">Revision</option>
              <option value="review">Review</option>
              <option value="mcq">MCQ Practice</option>
            </select>
          </div>
          <div style={{ gridColumn: "span 2" }}>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Notes or Resource 🔗</label>
            <input style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} placeholder="PDF, book, tip..." value={newNote} onChange={e => setNewNote(e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>MCQs Total 🔢</label>
            <input type="number" min={0} style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} placeholder="Max Qs" value={newMcqTotal} onChange={e => setNewMcqTotal(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>MCQs Done ✅</label>
            <input type="number" min={0} style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} placeholder="Done Qs" value={newMcqDone} onChange={e => setNewMcqDone(Number(e.target.value))} />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Color Code 🎨</label>
            <input type="color" value={newColor} onChange={e => setNewColor(e.target.value)} style={{ width: "100%", height: "39px", borderRadius: "8px", border: "none", background: "#151624" }} />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>High Priority <span style={{ color: "#f5c500", fontSize: "1.12rem" }}>⭐</span></label>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <input type="checkbox" checked={newPriority} onChange={(e) => setNewPriority(e.target.checked)} style={{ accentColor: "#f5c500", width: 22, height: 22, margin: 0 }} />
            </div>
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Main Book/Video 📗</label>
            <input style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }} placeholder="Book/Video" value={newResource} onChange={e => setNewResource(e.target.value)} />
          </div>
          <div>
            <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "1.03rem", marginBottom: "4px", display: "block" }}>Resource Rating 🌟</label>
            <select value={newResourceRating} onChange={e => setNewResourceRating(Number(e.target.value))} style={{ width: "100%", background: "#151624", color: "#efeff5", borderRadius: "8px", border: "1px solid #2c3550", padding: "12px", fontSize: "1.08rem" }}>
              <option value={0}>Rate</option>
              <option value={1}>1★</option>
              <option value={2}>2★</option>
              <option value={3}>3★</option>
              <option value={4}>4★</option>
              <option value={5}>5★</option>
            </select>
          </div>
          <div style={{ gridColumn: "span 4" }}>
            <button type="submit" style={{
              background: "#2352a1", color: "white", border: "none", borderRadius: "10px", fontWeight: "bold",
              padding: "16px 0", width: "100%", fontSize: "1.12rem", cursor: "pointer", boxShadow: "0 2px 13px #23263b14"
            }} >+ Add Subject</button>
          </div>
        </form>
        {/* SUBJECT LIST */}
        <h2 style={{ color: "#c4d7fd", fontSize: "1.16rem", marginBottom: "15px", fontWeight: "800", letterSpacing: "-0.5px" }}>📚 Your Subjects</h2>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {subjects.map((subj, i) => (
            <li key={i} style={{
              background: subj.color || "#18192b",
              color: "#efeff5",
              borderRadius: "12px",
              border: "1.6px solid #232942",
              marginBottom: "15px",
              padding: "18px 17px",
              boxShadow: "0 2px 8px 0 rgba(50,80,120,0.10)",
              opacity: subj.completed ? 0.45 : 1,
              position: "relative", fontSize: "1.02rem"
            }}>
              {editIndex === i ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Subject Name:</label>
                    <input value={editFields.name || ""} onChange={e => handleEditChange("name", e.target.value)}
                      style={{ background: "#18192b", border: "1px solid #232942", color: "#efeff5", padding: "8px", borderRadius: "7px", width: "100%" }} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Deadline:</label>
                    <input type="date" value={editFields.deadline || ""} onChange={e => handleEditChange("deadline", e.target.value)}
                      style={{ background: "#18192b", border: "1px solid #232942", color: "#efeff5", padding: "8px", borderRadius: "7px", width: "100%" }} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Notes/Resource:</label>
                    <input value={editFields.note || ""} onChange={e => handleEditChange("note", e.target.value)}
                      style={{ background: "#18192b", border: "1px solid #232942", color: "#efeff5", padding: "8px", borderRadius: "7px", width: "100%" }} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Type/Tag:</label>
                    <select value={editFields.tag || ""} onChange={e => handleEditChange("tag", e.target.value)} style={{
                      background: "#18192b", color: "#efeff5", borderRadius: "7px", padding: "8px", width: "100%"
                    }}>
                      <option value="exam">Exam</option>
                      <option value="revision">Revision</option>
                      <option value="review">Review</option>
                      <option value="mcq">MCQ Practice</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Color:</label>
                    <input type="color" value={editFields.color || "#2352a1"} onChange={e => handleEditChange("color", e.target.value)} style={{ height: "35px", width: "100%", borderRadius: "7px", border: "none" }} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>High Priority:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" checked={editFields.priority || false} onChange={e => handleEditChange("priority", e.target.checked)} style={{ marginRight: 6 }} />
                      <span style={{ color: "#f5c500", marginLeft: "5px" }}>⭐</span>
                    </div>
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>MCQs Total:</label>
                    <input type="number" min={0} style={{ width: "100%", background: "#18192b", color: "#efeff5", borderRadius: "6px", padding: "8px" }} value={editFields.mcqTotal || 0} onChange={e => handleEditChange("mcqTotal", Number(e.target.value))} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>MCQs Done:</label>
                    <input type="number" min={0} style={{ width: "100%", background: "#18192b", color: "#efeff5", borderRadius: "6px", padding: "8px" }} value={editFields.mcqDone || 0} onChange={e => handleEditChange("mcqDone", Number(e.target.value))} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Book/Video:</label>
                    <input style={{ width: "100%", background: "#18192b", color: "#efeff5", borderRadius: "6px", padding: "8px" }} value={editFields.resource || ""} onChange={e => handleEditChange("resource", e.target.value)} />
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Resource Rating:</label>
                    <select value={editFields.resourceRating || 0} onChange={e => handleEditChange("resourceRating", Number(e.target.value))} style={{ width: "100%", background: "#18192b", color: "#efeff5", borderRadius: "6px", padding: "8px" }}>
                      <option value={0}>Rate</option>
                      <option value={1}>1★</option>
                      <option value={2}>2★</option>
                      <option value={3}>3★</option>
                      <option value={4}>4★</option>
                      <option value={5}>5★</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#c4d7fd", fontWeight: "bold", fontSize: "0.96rem", marginBottom: "2px", display: "block" }}>Completed:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input type="checkbox" checked={editFields.completed || false} onChange={e => handleEditChange("completed", e.target.checked)} style={{ marginRight: 6 }} />
                      <span style={{ color: "#43ea8f" }}>✅</span>
                    </div>
                  </div>
                  <div style={{ gridColumn: "span 4", marginTop: "10px" }}>
                    <button style={{ background: "#43ea8f", border: "none", borderRadius: "7px", padding: "8px 16px", marginRight: 8, fontWeight: "bold", cursor: "pointer" }} onClick={() => handleEditSave(i)}>✅ Save</button>
                    <button style={{ background: "#fe3292", border: "none", borderRadius: "7px", padding: "8px 16px", color: "#fff", fontWeight: "bold", cursor: "pointer" }} onClick={() => setEditIndex(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "7px" }}>
                    <div style={{ fontWeight: "bold", fontSize: "1.08rem", letterSpacing: "-0.5px" }}>
                      {subj.priority && <span style={{ color: "#f5c500" }}>⭐ </span>}
                      {subj.name}
                      <span style={{
                        background: "#232942", color: "#c4d7fd", borderRadius: "5px", padding: "2px 8px", marginLeft: 8, fontSize: "0.94rem", fontWeight: "normal"
                      }}>{subj.tag}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                      <button title="Edit" style={{
                        background: "none", border: "none", color: "#29feef",
                        fontWeight: "bold", fontSize: "1.13rem", cursor: "pointer", marginRight: 3
                      }} onClick={() => handleEditStart(i)}>✏️</button>
                      <button title="Delete" style={{
                        background: "none", border: "none", color: "#fe3292", fontWeight: "bold", fontSize: "1.13rem", cursor: "pointer"
                      }} onClick={() => handleRemove(i)}>🗑️</button>
                    </div>
                  </div>
                  <div style={{ marginBottom: "3px" }}>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginRight: "6px" }}>Deadline:</span>
                    <span style={{ color: "#43ea8f" }}>{subj.deadline}</span>
                    {deadlineStatus(subj.deadline) && (
                      <span style={{
                        color: deadlineStatus(subj.deadline) === "Due soon" ? "#ffba1a" : deadlineStatus(subj.deadline) === "Due today" ? "#43ea8f" : "#fe3292",
                        marginLeft: "12px"
                      }}>
                        {deadlineStatus(subj.deadline) === "Past due" ? "⚠️" : ""} {deadlineStatus(subj.deadline)}
                      </span>
                    )}
                  </div>
                  <div style={{ marginBottom: "3px" }}>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginRight: "6px" }}>Notes/Resource:</span>
                    <span style={{ color: "#c7dafb" }}>{subj.note || "None"}</span>
                  </div>
                  <div style={{ marginBottom: "3px" }}>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginRight: "6px" }}>Main Book/Video:</span>
                    <span style={{ color: "#ffd36d" }}>{subj.resource || "Not set"}{subj.resourceRating > 0 && <span style={{ color: "#ffba1a" }}> ({subj.resourceRating}★)</span>}</span>
                  </div>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginRight: "6px" }}>MCQs:</span>
                    <input
                      type="number"
                      min={0}
                      max={subj.mcqTotal}
                      value={subj.mcqDone}
                      onChange={e => handleMCQDoneInput(i, Number(e.target.value))}
                      style={{ width: "75px", marginRight: "5px", background: "#151624", color: "#43ea8f", padding: "4px 7px", borderRadius: "6px", border: "1px solid #232942" }}
                    /> / {subj.mcqTotal}
                    <span style={{ marginLeft: "10px", color: "#1cbe9e" }}>+</span>
                    {[10, 50, 100, 500].map(batch => (
                      <button
                        key={batch}
                        type="button"
                        onClick={() => handleAddMCQ(i, batch)}
                        style={{
                          marginLeft: "5px", background: "#232942", color: "#eaeefa", border: "none", fontWeight: "bold", padding: "3px 8px", borderRadius: "6px", cursor: "pointer",
                          fontSize: "0.97rem", transition: "background 0.14s"
                        }}>+{batch}</button>
                    ))}
                  </div>
                  <div style={{ marginBottom: "4px" }}>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginRight: "6px" }}>Status:</span>
                    <input
                      type="checkbox"
                      checked={subj.completed}
                      onChange={() => handleToggleComplete(i)}
                      style={{ marginRight: "5px", accentColor: "#43ea8f", width: "19px", height: "19px" }}
                    />
                    <span style={{ color: "#43ea8f" }}>{subj.completed ? "Completed" : "Incomplete"}</span>
                  </div>
                  <div>
                    <span style={{ color: "#b8cdf1", fontWeight: "bold", marginBottom: "4px", marginTop: "8px", display: "block" }}>MCQ Log:</span>
                    <ul style={{ listStyle: "none", margin: 0, paddingLeft: "0" }}>
                      {subj.mcqSessions.length ? (
                        subj.mcqSessions.slice(-7).reverse().map((s, idx) =>
                          <li key={idx} style={{ color: "#abd6ff", fontSize: "0.96em", marginBottom: "2px" }}>
                            {s.amount > 0
                              ? `+${s.amount} on `
                              : `${s.amount} changed on `
                            }
                            <span style={{ color: "#efd7ff" }}>
                              {new Date(s.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "2-digit" })}
                            </span>
                          </li>
                        )
                      ) : (
                        <li style={{ color: "#444" }}>No sessions yet.</li>
                      )}
                    </ul>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div style={{
        maxWidth: "510px", fontStyle: "italic", fontSize: "1.09rem", color: "#b8cdf1",
        background: "#151624", borderRadius: "15px", padding: "19px 16px", marginBottom: "38px",
        boxShadow: "0 2px 14px 0 rgba(50,146,254,0.04)", border: "1.6px solid #23263b", lineHeight: "1.62"
      }}>
        (Data saved to device. Optional: Sign up for cloud sync and cross-device access!)
      </div>
    </div>
  );
}
