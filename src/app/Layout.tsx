import React from 'react';
import { Outlet } from 'react-router';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white selection:bg-fuchsia-500/30 font-sans flex overflow-hidden">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-64 flex flex-col h-screen overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
