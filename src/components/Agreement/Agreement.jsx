import { useState } from "react";
import RightArrow from "./RightArrow"; 
import CheckBox from "./CheckBox"; 
import Text from "./Text"; 

const Agreement = ({ title, isChecked, onCheck, onGoDetail}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="st-agreement-container" style={{ 
      borderBottom: '1px solid var(--st-border-light)',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto'
    }}>
      
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
        <Text variant="large" tone="main">{title || "약관 전체동의"}</Text>
        
        <div style={{ 
          display: 'flex',
        }}>
          <RightArrow /> 
        </div>
      </div>

        {/* 드롭다운 내용 */}
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

            <CheckBox checked={isChecked} onChange={onCheck} />
            
            <Text variant="small" tone="muted">
              개인정보 수집 및 이용 동의 (필수)
            </Text>
          </div>
        
            {/* 상세 약관 이동 */}
          <RightArrow onClick={(e) => {
            e.stopPropagation();
            if (onGoDetail) onGoDetail()
          }} />
        </div>
      )}
    </div>
  );
};

export default Agreement;