import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RightArrow from "./RightArrow"; 

const Agreement = ({ title, isChecked, onCheck }) => {
  const navigate = useNavigate();
  // 1. 드롭다운 열림/닫힘 상태 관리
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="st-agreement-container" style={{ 
      borderBottom: '1px solid var(--st-border-light)',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      
      {/* 드롭다운이 열림 */}
      <div 
        className="st-agreement-header"
        onClick={() => setIsOpen(!isOpen)} 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: 'var(--st-spacing-m)',
          backgroundColor: 'var(--st-white)',
          cursor: 'pointer'
        }}
      >
        <span style={{ fontWeight: '600', fontSize: '16px' }}>
          {title || "약관 전체동의"}
        </span>
        
        {/* 드롭다운용 화살표: isOpen 상태에 따라 아래(90도)로 회전 */}
        <div style={{ 
          display: 'flex',
        }}>
          <RightArrow /> 
        </div>
      </div>

    
      {isOpen && (
        <div className="st-agreement-content" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '12px var(--st-spacing-m)',
          backgroundColor: '#f9f9f9',
          borderTop: '1px solid #eee'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <input 
              type="checkbox" 
              checked={isChecked} 
              onChange={onCheck} 
              style={{ width: '18px', height: '18px' }}
            />
            <span style={{ fontSize: '14px', color: '#555' }}>
              개인정보 수집 및 이용 동의 (필수)
            </span>
          </div>
        
          {/* 상세 페이지로 이동하는 화살표 */}
          <RightArrow onClick={(e) => {
            e.stopPropagation();
            navigate('/detail/1');
          }} />
        </div>
      )}
    </div>
  );
};

export default Agreement;