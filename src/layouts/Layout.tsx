import Header from '../components/Header';
import type { ReactNode } from 'react';

interface LayoutProps {
  title: string;
  children: ReactNode;
  bgGradient?: string;
}

function Layout({ title, children, bgGradient = 'from-indigo-500 via-purple-500 to-pink-500' }: LayoutProps) {
  return (
    <div className={`min-h-screen w-full bg-gradient-to-br ${bgGradient} p-6`}>
      <div className="max-w-5xl mx-auto w-full space-y-6">
        <Header title={title} />
        {children}
      </div>
    </div>
  );
}

export default Layout;
