// src/components/FloatingPrebookButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingPrebook = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/prebook');
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-yellow-400 text-black p-4 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
      onClick={handleClick}
    >
      Pre-book now
    </button>
  );
};

export default FloatingPrebook;
