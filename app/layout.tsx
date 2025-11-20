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
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1"/>
      </head>
      <body
        style={{
          minHeight: '100vh',
          minWidth: 0,
          width: '100vw',
          overflow: 'hidden', // no sideways scroll
          background: 'linear-gradient(135deg, #0f111a, #151624)',
          color: '#efeff5',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        <div
          style={{
            minHeight: '100vh',
            width: '100vw',
            maxWidth: '100vw',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',         // Single vertical scroll for all content
            overflowX: 'hidden',
            paddingLeft: 'env(safe-area-inset-left)',
            paddingRight: 'env(safe-area-inset-right)',
            paddingTop: 'env(safe-area-inset-top)',
            paddingBottom: 'env(safe-area-inset-bottom)',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
