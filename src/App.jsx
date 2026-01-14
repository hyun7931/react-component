// src/App.jsx
import React from 'react';
import Detail from './components/Detail/Detail'; 
import './styles/theme.css'; 

function App() {
  return (
    <Detail>
      <Detail.Title>서비스 이용 약관</Detail.Title>
      
      <Detail.Subtitle>제 1조 (목적)</Detail.Subtitle>
      <Detail.Body>
        이 약관은 서비스 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </Detail.Body>
      
      <Detail.Subtitle>제 2조 (용어의 정의)</Detail.Subtitle>
      <Detail.Body>
        이 약관에서 사용하는 용어의 정의는 다음과 같습니다...
      </Detail.Body>

      <Detail.BadgeGroup>
        <Detail.BadgeItem>
          <Detail.Body>첫 번째 동글동글.</Detail.Body>
        </Detail.BadgeItem>
        <Detail.BadgeItem>
          <Detail.Body>두 번째 동글동글.</Detail.Body>
        </Detail.BadgeItem>
        <Detail.BadgeItem>
          <Detail.Body>세 번째 동글동글.</Detail.Body>
        </Detail.BadgeItem>
      </Detail.BadgeGroup>

    </Detail>
  );
}

export default App;