// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import Agreement from './components/Agreement/Agreement';

function App() {
  return (
    <BrowserRouter>
      <div className="st-container">
        <h1>약관 동의 테스트</h1>
        
        <Agreement 
          title="[필수] 개인정보 수집 및 이용 동의" 
          isChecked={false} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;