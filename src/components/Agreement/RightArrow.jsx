const RightArrow = ({ onClick }) => {
  return (
    <button 
      type="button" 
      className="st-right-arrow" 
      onClick={onClick}
      aria-label="상세보기"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M9 18L15 12L9 6" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default RightArrow;