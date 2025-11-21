"use client";

import Link from "next/link";
import DailyQuestionSet from "../components/DailyQuestionSet";
import { ArrowLeft } from "lucide-react";

export default function DailyQuizPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f111a 0%, #151624 50%, #0f111a 100%)',
      color: '#efeff5'
    }}>
      {/* Header/Navigation */}
      <header style={{
        borderBottom: '1px solid #232942',
        background: 'rgba(24, 25, 43, 0.95)',
        backdropFilter: 'blur(12px)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: '16px 24px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#43ea8f',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              padding: '8px 12px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(67, 234, 143, 0.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            <ArrowLeft style={{ width: '20px', height: '20px' }} />
            Back to Home
          </Link>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '16px',
              color: 'white'
            }}>
              FH
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#c4d7fd' }}>FMGE Horizon</div>
              <div style={{ fontSize: '10px', color: '#7a8194' }}>Daily Challenge</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 16px',
        minHeight: 'calc(100vh - 100px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            lineHeight: '1.2'
          }}>
            Daily FMGE Challenge
          </h1>
          <p style={{
            fontSize: 'clamp(14px, 3vw, 18px)',
            color: '#b8cdf1',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Test your knowledge with curated questions from past FMGE exams
          </p>
        </div>

        {/* Quiz Component */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}>
          <DailyQuestionSet />
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid #232942',
        padding: '24px',
        background: 'rgba(15, 17, 26, 0.8)',
        textAlign: 'center',
        marginTop: '60px'
      }}>
        <p style={{
          color: '#7a8194',
          fontSize: '12px',
          margin: '0'
        }}>
          © 2025 FMGE Horizon • Your journey to success
        </p>
      </footer>
    </div>
  );
}
