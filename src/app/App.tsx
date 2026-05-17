import React from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { PasswordGate } from './PasswordGate';

export default function App() {
  return (
    <PasswordGate>
      <RouterProvider router={router} />
    </PasswordGate>
  );
}
