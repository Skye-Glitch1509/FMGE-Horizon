"use client";

import Link from 'next/link';
import { BookOpen, Calendar, Target, TrendingUp, Zap, BarChart3, Brain, Award, HelpCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f111a 0%, #151624 50%, #0f111a 100%)', color: '#efeff5' }}>
      
      {/* Navigation Bar */}
      <nav style={{ borderBottom: '1px solid #232942', background: 'rgba(24, 25, 43, 0.95)', backdropFilter: 'blur(12px)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'linear-gradient(135deg, #2352a1, #43ea8f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px', color: 'white' }}>
              FH
            </div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#c4d7fd', letterSpacing: '-0.5px' }}>FMGE Horizon</div>
              <div style={{ fontSize: '11px', color: '#7a8194', marginTop: '-2px' }}>Your Complete FMGE Prep Platform</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link 
              href="/planner"
              style={{ padding: '10px 20px', borderRadius: '8px', background: 'rgba(35, 82, 161, 0.2)', border: '1px solid rgba(35, 82, 161, 0.5)', color: '#2352a1', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s' }}
            >
              Study Planner
            </Link>
            <Link 
              href="/syllabus"
              style={{ padding: '10px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #2352a1, #43ea8f)', color: 'white', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(35, 82, 161, 0.3)' }}
            >
              Syllabus Tracker
            </Link>
            <Link 
              href="/prioritizer"
              style={{ padding: '10px 20px', borderRadius: '8px', background: 'linear-gradient(135deg, #43ea8f, #2352a1 80%)', color: '#0f111a', textDecoration: 'none', fontSize: '14px', fontWeight: 600, transition: 'all 0.2s', boxShadow: '0 4px 12px rgba(67, 234, 143, 0.25)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <HelpCircle style={{ width: '18px', height: '18px' }} />
              Diagnostic Quiz
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 24px 80px', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'rgba(67, 234, 143, 0.1)', border: '1px solid rgba(67, 234, 143, 0.3)', borderRadius: '9999px', marginBottom: '32px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#43ea8f', textTransform: 'uppercase', letterSpacing: '1px' }}>✨ All-in-One FMGE Solution</span>
        </div>
        
        <h1 style={{ fontSize: '72px', fontWeight: 'bold', color: 'white', marginBottom: '24px', lineHeight: '1.1', letterSpacing: '-2px' }}>
          Welcome to
          <br />
          <span style={{ background: 'linear-gradient(135deg, #2352a1, #43ea8f)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            FMGE Horizon
          </span>
        </h1>
        
        <p style={{ fontSize: '22px', color: '#b8cdf1', maxWidth: '700px', margin: '0 auto 48px', lineHeight: '1.6' }}>
          Your comprehensive platform to plan, track, and conquer the FMGE exam. 
          Built by medical students, for medical students.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '80px' }}>
          <Link 
            href="/planner"
            style={{
              padding: '18px 36px',
              background: 'linear-gradient(135deg, #2352a1, #1a4080)',
              color: 'white',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
              boxShadow: '0 8px 24px rgba(35, 82, 161, 0.4)'
            }}
          >
            <Calendar style={{ width: '22px', height: '22px' }} />
            Launch Study Planner
          </Link>
          <Link 
            href="/syllabus"
            style={{
              padding: '18px 36px',
              background: 'rgba(24, 25, 43, 0.8)',
              border: '2px solid rgba(67, 234, 143, 0.4)',
              color: '#43ea8f',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s'
            }}
          >
            <BookOpen style={{ width: '22px', height: '22px' }} />
            View Syllabus
          </Link>
          <Link
            href="/prioritizer"
            style={{
              padding: '18px 36px',
              background: 'linear-gradient(135deg, #43ea8f, #2352a1 80%)',
              color: '#0f111a',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              transition: 'all 0.3s',
              boxShadow: '0 8px 24px rgba(67, 234, 143, 0.32)'
            }}
          >
            <HelpCircle style={{ width: '22px', height: '22px' }} />
            Take Diagnostic Quiz
          </Link>
        </div>

        {/* Stats Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { number: '741', label: 'Total Topics', icon: Target },
            { number: '19', label: 'Subject Areas', icon: BookOpen },
            { number: '100% Privacy', label: 'Local Storage', icon: Zap }
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} style={{ background: 'rgba(24, 25, 43, 0.6)', border: '1px solid #232942', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                <Icon style={{ width: '24px', height: '24px', color: '#43ea8f', margin: '0 auto 12px' }} />
                <div style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', marginBottom: '4px' }}>{stat.number}</div>
                <div style={{ fontSize: '14px', color: '#7a8194' }}>{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Features, CTA, Footer ... (as in your original code, unchanged) */}
      {/* ... keep the rest of your code ... */}

    </div>
  );
}

      {/* Features Section */}
      <div style={{ background: 'rgba(24, 25, 43, 0.4)', borderTop: '1px solid #232942', borderBottom: '1px solid #232942' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
              Everything You Need in One Place
            </h2>
            <p style={{ fontSize: '18px', color: '#b8cdf1', maxWidth: '600px', margin: '0 auto' }}>
              Powerful features designed to make your FMGE preparation efficient and stress-free
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {[
              {
                icon: Calendar,
                title: 'Smart Study Planner',
                description: 'Organize subjects, set deadlines, track MCQ progress, and manage resources with an intuitive dashboard.',
                color: '#2352a1',
                gradient: 'linear-gradient(135deg, rgba(35, 82, 161, 0.1), rgba(35, 82, 161, 0.05))'
              },
              {
                icon: BookOpen,
                title: 'Complete Syllabus Tracker',
                description: 'Master all 19 subjects with a comprehensive checklist of 271 topics across Clinical, Pre-Clinical, and Para-Clinical areas.',
                color: '#43ea8f',
                gradient: 'linear-gradient(135deg, rgba(67, 234, 143, 0.1), rgba(67, 234, 143, 0.05))'
              },
              {
                icon: BarChart3,
                title: 'Progress Analytics',
                description: 'Visualize your preparation with detailed charts, track study streaks, and monitor daily MCQ completion rates.',
                color: '#ffba1a',
                gradient: 'linear-gradient(135deg, rgba(255, 186, 26, 0.1), rgba(255, 186, 26, 0.05))'
              },
              {
                icon: Brain,
                title: 'Wellness Tracking',
                description: 'Monitor your mental health and prevent burnout with daily wellness scores and personalized insights.',
                color: '#29feef',
                gradient: 'linear-gradient(135deg, rgba(41, 254, 239, 0.1), rgba(41, 254, 239, 0.05))'
              },
              {
                icon: Zap,
                title: 'Works Offline',
                description: 'All data stored locally on your device. Study anywhere, anytime without internet dependency.',
                color: '#fe3292',
                gradient: 'linear-gradient(135deg, rgba(254, 50, 146, 0.1), rgba(254, 50, 146, 0.05))'
              },
              {
                icon: Award,
                title: 'Study Reminders',
                description: 'Never miss a study session with customizable daily reminders and notification support.',
                color: '#c084fc',
                gradient: 'linear-gradient(135deg, rgba(192, 132, 252, 0.1), rgba(192, 132, 252, 0.05))'
              }
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i} 
                  style={{ 
                    background: feature.gradient, 
                    border: `1px solid ${feature.color}40`, 
                    borderRadius: '16px', 
                    padding: '36px', 
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 12px 32px ${feature.color}30`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ 
                    width: '56px', 
                    height: '56px', 
                    borderRadius: '14px', 
                    background: `${feature.color}20`, 
                    border: `1px solid ${feature.color}40`, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    marginBottom: '20px' 
                  }}>
                    <Icon style={{ width: '28px', height: '28px', color: feature.color }} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', marginBottom: '12px' }}>{feature.title}</h3>
                  <p style={{ fontSize: '15px', color: '#b8cdf1', lineHeight: '1.7' }}>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '100px 24px' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(35, 82, 161, 0.2), rgba(67, 234, 143, 0.1))', 
          border: '1px solid rgba(67, 234, 143, 0.3)', 
          borderRadius: '24px', 
          padding: '60px 40px', 
          textAlign: 'center' 
        }}>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: 'white', marginBottom: '16px' }}>
            Ready to Transform Your FMGE Prep?
          </h2>
          <p style={{ fontSize: '18px', color: '#b8cdf1', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join thousands of medical students using FMGE Horizon to ace their exams
          </p>
          <Link 
            href="/planner"
            style={{
              padding: '18px 42px',
              background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
              color: 'white',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 8px 24px rgba(35, 82, 161, 0.4)',
              transition: 'all 0.3s'
            }}
          >
            Get Started Now
            <span style={{ fontSize: '20px' }}>→</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #232942', padding: '40px 24px', background: 'rgba(15, 17, 26, 0.8)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #2352a1, #43ea8f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '16px', color: 'white' }}>
              FH
            </div>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#c4d7fd' }}>FMGE Horizon</span>
          </div>
          <p style={{ color: '#7a8194', fontSize: '14px', lineHeight: '1.6' }}>
            Built with ❤️ for FMGE aspirants • All data stored locally on your device<br />
            © 2025 FMGE Horizon. Your journey to success starts here.
          </p>
        </div>
      </footer>
