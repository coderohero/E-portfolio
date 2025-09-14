import { useState, useEffect } from 'react';

interface TerminalIntroProps {
  onComplete: () => void;
}

export default function TerminalIntroAnimation({ onComplete }: TerminalIntroProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    '> Initializing Ponnuru Saiharsha Portfolio...',
    '> Loading creative modules... ✓',
    '> Connecting to innovation servers... ✓',
    '> Optimizing user experience... ✓',
    '> Compiling visual effects... ✓',
    '> Enabling interactive features... ✓',
    '> Portfolio ready. Welcome to the future.',
    '> Loading complete. Entering immersive mode...'
  ];

  useEffect(() => {
    if (currentLine >= terminalLines.length) {
      setTimeout(() => onComplete(), 1000);
      return;
    }

    const currentText = terminalLines[currentLine];
    
    if (currentChar < currentText.length) {
      const timer = setTimeout(() => {
        setCurrentChar(prev => prev + 1);
      }, 50 + Math.random() * 50); // Variable typing speed for realism

      return () => clearTimeout(timer);
    } else {
      // Move to next line after a pause
      setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 800);
    }
  }, [currentLine, currentChar, onComplete, terminalLines]);

  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-8">
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl border border-gray-700">
          {/* Terminal Header */}
          <div className="flex items-center mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-gray-400 text-sm">Terminal - Ponnuru Saiharsha</div>
          </div>
          
          {/* Terminal Content */}
          <div className="font-mono text-green-400 text-sm leading-relaxed">
            {terminalLines.map((line, lineIndex) => (
              <div key={lineIndex} className="mb-2">
                {lineIndex < currentLine ? (
                  <span className="opacity-80">{line}</span>
                ) : lineIndex === currentLine ? (
                  <span>
                    {line.substring(0, currentChar)}
                    {showCursor && <span className="bg-green-400 text-black px-1">|</span>}
                  </span>
                ) : (
                  <span className="opacity-30">{line}</span>
                )}
              </div>
            ))}
            
            {/* Progress Bar */}
            <div className="mt-6">
              <div className="text-gray-500 text-xs mb-2">Loading Progress</div>
              <div className="bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentLine / terminalLines.length) * 100}%` }}
                ></div>
              </div>
              <div className="text-right text-xs text-gray-500 mt-1">
                {Math.round((currentLine / terminalLines.length) * 100)}%
              </div>
            </div>
          </div>
        </div>
        
        {/* Scanning Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent h-1 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}