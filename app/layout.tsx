import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
