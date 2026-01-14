import React, { useState } from 'react';
import '../../styles/theme.css';


const CheckBox = ({ checked = false, onChange, className = ''}) => {
    //Hover는  state로 처리
    const [isHovered, setHovered] = useState(false);

    const inactiveColor = 'var(--st-text-muted)'; // #8b95a1
    const hoverColor = 'var(--st-primary)'; // #3182f6
    const activeColor = 'var(--st-primary-hover)'; // #1b64da

    const currentColor = isHovered ? hoverColor : (checked ? activeColor : inactiveColor);

    
     return (
        <div
            //마우스 이벤트 핸들러
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}

            onClick={() => onChange && onChange(!checked)}

            style={
                {
                    color: currentColor,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
                
            }
            className={className}
        >
            {/* 체크박스 형태 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
     ); 
};

export default CheckBox;

