import react from 'react';
import '../../styles/theme.css';

const colorMap = {
  muted: 'var(--st-text-muted)', //회색
  main: 'var(--st-text-main)', //검정
  primary: 'var(--st-primary)', //파랑
};

//사용 예시
// variant = large | small , tone = main | muted | primary
// <Text variant="large" tone="main">Large - Main (검정)</Text>
// <Text variant="small" tone="muted">Small - Muted (회색)</Text>

const text = ({children, variant = 'large', tone = 'muted' }) => {
    const styles = {
        userSelect: 'none',
        display: 'inline-block',
        color: colorMap[tone],
        textAlign: 'left',
        transition: 'color 0.2s ease', //색상 전환 시 부드러운 효과
        lineHeight: '1.5', //텍스트 높이 간격을 text의 1.5배로
        fontFamily: 'inherit',
    };

    const variantStyles = {
        large:{
            fontSize: 'var(--st-font-caption)', 
            fontWeight: '500',
        },
        small : {
            fontSize: 'var(--st-font-tiny)',
            fontWeight: '300',
        }
    }
    return (
        <span style={{...styles, ...variantStyles[variant]}}>
            {children}
        </span>
    );  
};

export default text;