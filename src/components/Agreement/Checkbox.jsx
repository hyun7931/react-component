import React, { useState } from 'react';
import './Agreement.css';

const CheckBox = ({ checked = false, onChange, className = '' }) => {
    const [isHovered, setHovered] = useState(false);

    // 상태에 따른 클래스 결정
    const statusClass = isHovered ? 'hovered' : (checked ? 'checked' : 'inactive');

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onChange && onChange(!checked)}
            className={`st-checkbox-container ${statusClass} ${className}`}
        >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
            </svg>
        </div>
    );
};

export default CheckBox;