import React, { useState, useEffect } from 'react';
import ConsentModal from './components/ConsentModal';
import ChatInterface from './components/ChatInterface';
import { AppState } from './types';
import { Activity } from 'lucide-react';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.CONSENT_PENDING);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleConsentAccepted = () => {
    setAppState(AppState.INTAKE_ACTIVE);
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:items-center md:justify-center p-0 md:p-6 lg:p-10 font-sans text-slate-900 dark:text-slate-100 transition-colors duration-300">
        
        {/* Background Decor */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 dark:opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 mix-blend-multiply dark:mix-blend-screen"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 dark:bg-emerald-900 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 mix-blend-multiply dark:mix-blend-screen"></div>
        </div>

        {/* Main Container */}
        <div className="relative w-full max-w-2xl h-[100dvh] md:h-[85vh] flex flex-col z-10">
          
          {/* Branding (Mobile only, hidden in chat interface header) */}
          <div className="md:hidden p-4 flex items-center justify-center space-x-2 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 sticky top-0 z-30 transition-colors">
            <div className="bg-blue-600 p-1.5 rounded-lg text-white">
              <Activity size={20} />
            </div>
            <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">MediBot</h1>
          </div>

          {appState === AppState.CONSENT_PENDING && (
            <ConsentModal onAccept={handleConsentAccepted} />
          )}

          <div className={`flex-1 transition-opacity duration-500 ${appState === AppState.CONSENT_PENDING ? 'opacity-0' : 'opacity-100'}`}>
             {appState !== AppState.CONSENT_PENDING && (
               <ChatInterface theme={theme} toggleTheme={toggleTheme} />
             )}
          </div>

        </div>

        {/* Footer Branding (Desktop) */}
        <div className="hidden md:flex fixed bottom-4 left-0 right-0 justify-center items-center space-x-2 text-slate-400 dark:text-slate-500 text-sm opacity-60">
          <Activity size={16} />
          <span>Powered by Gemini 3.0 Pro • Built for Privacy</span>
        </div>
      </div>
    </div>
  );
};

export default App;