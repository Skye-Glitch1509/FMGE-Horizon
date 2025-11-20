import './globals.css';
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
  title: 'FMGE Planner',
  description: 'Interactive FMGE exam study planner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Mobile viewport for proper scaling and no zoom */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{
        minHeight: '100vh',
        minWidth: 0,
        width: '100vw',
        overflowX: 'hidden',
        background: 'linear-gradient(135deg, #0f111a, #151624)',
        color: '#efeff5',
        WebkitOverflowScrolling: 'touch' // enables smooth scrolling iOS
      }}>
        <div
          style={{
            minHeight: '100vh',
            width: '100%',
            boxSizing: 'border-box',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
