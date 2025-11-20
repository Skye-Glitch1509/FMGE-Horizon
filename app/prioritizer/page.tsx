import FMGEQuiz from '../components/FMGEQuiz';

export default function PrioritizerPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f111a, #151624)',
      color: '#efeff5',
      fontFamily: 'system-ui, sans-serif',
      padding: 0
    }}>
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '32px 0'}}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '2.4rem',
          marginBottom: '2rem',
          color: '#43ea8f'
        }}>
          FMGE Diagnostic Quiz
        </h1>
        <FMGEQuiz />
      </div>
    </div>
  );
}
