// src/components/CursorEffect.jsx
import React from 'react';

const CursorEffect = ({ cursorPos }) => {
  return (
    <div
      className="fixed top-0 left-0 w-64 h-64 rounded-full pointer-events-none z-[9999] opacity-10 blur-3xl"
      style={{
        transform: `translate(${cursorPos.x - 128}px, ${cursorPos.y - 128}px)`,
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
        transition: 'transform 0.1s ease-out',
      }}
    ></div>
  );
};

export default CursorEffect;
