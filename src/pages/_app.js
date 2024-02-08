// pages/_app.js
import { DarkModeProvider } from '@/app/components/darkModeProvider.js';
import 'tailwindcss/tailwind.css';
import '@/styles/globals.css';
import Navbar from '@/app/components/Navbar.js';
import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/index';
import keyboard from './keyboard';

function App({ Component, pageProps }) {
  return (
    <DarkModeProvider >
      <Navbar />
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default App;
