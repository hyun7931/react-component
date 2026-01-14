import React from 'react';
import './Agreement.css';

const RightArrow = ({ onClick }) => {
  return (
    <button 
      type="button" 
      className="st-right-arrow" 
      onClick={onClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18L15 12L9 6" />
      </svg>
    </button>
  );
};

export default RightArrow;