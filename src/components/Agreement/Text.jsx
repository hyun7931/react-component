import react from 'react';
import './Agreement.css';

//사용 예시
// variant = large | small , tone = main | muted | primary
// <Text variant="large" tone="main">Large - Main (검정)</Text>
// <Text variant="small" tone="muted">Small - Muted (회색)</Text>

const Text = ({ children, variant = 'large', tone = 'muted' }) => {
    return (
        <span className={`st-agreement-text ${variant} ${tone}`}>
            {children}
        </span>
    );
};

export default Text;