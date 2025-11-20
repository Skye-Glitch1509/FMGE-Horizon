import React, { useState, useEffect } from 'react';

// Local Storage Key
const MOTIVATION_KEY = 'fmgeMotivation';

const MotivationCard: React.FC = () => {
  const [motivation, setMotivation] = useState('');
  const [editing, setEditing] = useState(false);

  // Load motivation on mount
  useEffect(() => {
    const saved = localStorage.getItem(MOTIVATION_KEY);
    if (saved) setMotivation(saved);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem(MOTIVATION_KEY, motivation);
  }, [motivation]);

  return (
    <div
      style={{
        background: 'linear-gradient(90deg, #2352a1 80%, #11131c 100%)',
        borderRadius: 16,
        padding: '1.5rem',
        color: 'white',
        marginBottom: '1.5rem'
      }}
    >
      <h2 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.3rem' }}>
        My Why
      </h2>
      {editing ? (
        <div>
          <input
            type="text"
            value={motivation}
            onChange={e => setMotivation(e.target.value)}
            maxLength={100}
            placeholder="Why are you preparing for FMGE?"
            style={{
              width: '100%',
              padding: '0.5rem',
              borderRadius: 8,
              border: 'none',
              fontSize: '1rem',
              color: '#2352a1'
            }}
            autoFocus
          />
          <button
            style={{
              marginTop: '1rem',
              background: '#04bc93',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.5rem',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
            onClick={() => setEditing(false)}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p style={{ fontSize: '1.1rem', marginBottom: '1rem'}}>
            {motivation ? motivation : <span style={{color:'#ccc'}}>No motivation set yet.</span>}
          </p>
          <button
            style={{
              background: '#2f365f',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '0.5rem 1.5rem',
              cursor: 'pointer'
            }}
            onClick={() => setEditing(true)}
          >
            {motivation ? 'Edit Motivation' : 'Add Motivation'}
          </button>
        </div>
      )}
    </div>
  );
};

export default MotivationCard;
