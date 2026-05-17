import React from 'react';
import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { Dashboard } from './components/Dashboard';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: '*', Component: () => <div className="text-white text-center mt-20 text-2xl font-bold">Page Coming Soon</div> },
    ],
  },
]);
