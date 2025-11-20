'use client';
import React, { useState } from 'react';
import { quizSubjects } from '../lib/subjectData';
import { quizQuestions, QuizQuestion } from '../lib/quizQuestions';
import Link from 'next/link';

interface QuizAnswer {
  [questionIndex: number]: number | null;
}

interface SubjectScores {
  [subject: string]: number; // percentage
}

const FMGEQuiz: React.FC = () => {
  const questions = quizSubjects.flatMap(sub =>
    quizQuestions.filter(q => q.subject === sub.slug)
  );

  const [answers, setAnswers] = useState<QuizAnswer>({});
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);
  const total = questions.length;

  const handleSelect = (optionIdx: number) => {
    setAnswers(prev => ({
      ...prev,
      [current]: optionIdx
    }));
  };

  const next = () => {
    if (current < total - 1) setCurrent(current + 1);
    else setDone(true);
  };

  const getScores = (): SubjectScores => {
    const scores: SubjectScores = {};
    quizSubjects.forEach(sub => {
      const subQuestions = questions
        .map((q, i) => ({ ...q, idx: i }))
        .filter(q => q.subject === sub.slug);
      const correct = subQuestions.filter(q =>
        answers[q.idx] === q.correctIndex
      ).length;
      scores[sub.slug] =
        subQuestions.length === 0
          ? 0
          : Math.round((100 * correct) / subQuestions.length);
    });
    return scores;
  };

  const scores = getScores();
  const weakest = [...quizSubjects].sort((a, b) => scores[a.slug] - scores[b.slug]);
  const weakestHighYield = weakest.filter(s => s.highYield);
  const weakestConceptual = weakest.filter(s => s.conceptual);

  if (!done) {
    const q = questions[current];
    return (
      <div style={{ maxWidth: 600, margin: '0 auto', background: '#292d42', borderRadius: 16, padding: 32, color: 'white', boxShadow: '0 4px 24px #23294244' }}>
        <div style={{ marginBottom: 18, fontWeight: 600, color: '#b8cdf1' }}>
          Subject: {quizSubjects.find(s => s.slug === q.subject)?.name}
        </div>
        <h2 style={{ marginBottom: 18 }}>{q.text}</h2>
        <div>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                display: 'block',
                width: '100%',
                padding: '12px 16px',
                marginBottom: '12px',
                background: answers[current] === idx ? '#43ea8f' : '#232942',
                border: 'none',
                borderRadius: '8px',
                color: answers[current] === idx ? 'black' : '#efeff5',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {opt}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <button
            disabled={answers[current] === undefined}
            onClick={next}
            style={{
              background: '#2352a1',
              color: '#fff',
              border: 'none',
              borderRadius: 8,
              padding: '0.6rem 1.4rem',
              fontWeight: 'bold',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            {current === total - 1 ? "Finish Quiz" : "Next"}
          </button>
        </div>
        <div style={{ marginTop: 16, color: '#7a8194', fontSize: '0.9rem' }}>
          {`Question ${current + 1} of ${total}`}
        </div>
        <div style={{ marginTop: '32px', textAlign: 'center' }}>
          <Link 
            href="/"
            style={{
              padding: '14px 36px',
              background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
              color: 'white',
              borderRadius: '10px',
              fontWeight: 'bold',
              fontSize: '18px',
              textDecoration: 'none',
              boxShadow: '0 4px 24px #23294240',
              display: 'inline-block'
            }}
          >
            ← Go to Home
          </Link>
        </div>
      </div>
    );
  }

  // Result display
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', background: '#232942', borderRadius: 18, padding: 36, color: 'white' }}>
      <h2 style={{ fontWeight: 'bold', fontSize: '2rem', marginBottom: '2rem', color: '#43ea8f' }}>
        Your Subject Strengths
      </h2>
      <div style={{ marginBottom: '2rem' }}>
        <strong>Suggested Order (Weakest → Strongest):</strong>
        <ol>
          {weakest.map((sub, i) => (
            <li key={sub.slug} style={{ color: scores[sub.slug] < 50 ? '#ff7a7a' : '#b8cdf1' }}>
              {sub.name} ({scores[sub.slug] || 0}%)
              {sub.highYield && (
                <span style={{ background: '#43ea8f', color: 'black', marginLeft: '8px', padding: '2px 8px', borderRadius: '6px', fontSize: '0.85rem'}}>High Yield</span>
              )}
              {sub.conceptual && (
                <span style={{ background: '#2352a1', color: 'white', marginLeft: '8px', padding: '2px 8px', borderRadius: '6px', fontSize: '0.85rem'}}>Conceptual</span>
              )}
            </li>
          ))}
        </ol>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        <strong>Start With Weakest High-Yield:</strong>
        <ul>
          {weakestHighYield.map(sub => (
            <li key={sub.slug} style={{ color: scores[sub.slug] < 50 ? '#ff7a7a' : '#43ea8f'}}>
              {sub.name} ({scores[sub.slug] || 0}%)
            </li>
          ))}
        </ul>
      </div>
      <div>
        <strong>Start With Weakest Conceptual:</strong>
        <ul>
          {weakestConceptual.map(sub => (
            <li key={sub.slug} style={{ color: scores[sub.slug] < 50 ? '#ff7a7a' : '#b8cdf1'}}>
              {sub.name} ({scores[sub.slug] || 0}%)
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '32px', textAlign: 'center' }}>
        <Link
          href="/"
          style={{
            padding: '14px 36px',
            background: 'linear-gradient(135deg, #2352a1, #43ea8f)',
            color: 'white',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '18px',
            textDecoration: 'none',
            boxShadow: '0 4px 24px #23294240',
            display: 'inline-block'
          }}
        >
          ← Go to Home
        </Link>
      </div>
    </div>
  );
};

export default FMGEQuiz;
