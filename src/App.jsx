import { useState } from 'react';
import Agreement from './components/Agreement/Agreement';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
      <div className="st-container" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      minHeight: '100vh',
      paddingTop: '50px' 
      }}>
      <h1>약관 동의 테스트</h1>
        
        <Agreement 
          title={
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{ color: 'var(--st-primary)' }}>[필수]</span>
              <span>개인정보 수집 및 이용 동의</span>
            </div>
          }
          isChecked={isChecked}
          onCheck={() => setIsChecked(!isChecked)}
          onGoDetail={() => alert('상세보기 클릭!')} 
        />
      </div>
  );
}

export default App;