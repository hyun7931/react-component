// src/App.jsx
import React, { useState } from 'react'
import Detail from './components/Detail/Detail'
import './styles/theme.css'
import { TERMS_DATA, AI_SUMMARY_DATA } from './assets/termsDummyData'
import Agreement from './components/Agreement/Agreement'

function App() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
      <div
        className='st-container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: '100vh',
          paddingTop: '50px',
        }}
      >
        <h1>약관 동의 테스트</h1>

        <Agreement
          title={
            <div style={{ display: 'flex', gap: '4px' }}>
              <span style={{ color: 'var(--st-primary)' }}>[필수]</span>
              <span>개인정보 수집 및 이용 동의</span>
            </div>
          }
          isChecked={isChecked}
          onCheck={() => setIsChecked(!isChecked)} // 체크박스 누르면 실행
          onGoDetail={() => alert('상세보기 연결')} // 화살표 눌렀을 때 (추후 수정)
        />
      </div>
      <Detail onConfirm={() => alert('확인되었습니다.')}>
        {TERMS_DATA.map(term => {
          return (
            <>
              <Detail.Title>{term.subtitle}</Detail.Title>
              <Detail.Body>{term.content}</Detail.Body>
            </>
          )
        })}

        <Detail.BadgeGroup>
          <Detail.Subtitle>AI 요약</Detail.Subtitle>
          {AI_SUMMARY_DATA.summary.split('\n').map((line, index) => (
            <Detail.BadgeItem key={index}>
              <Detail.Body>{line}</Detail.Body>
            </Detail.BadgeItem>
          ))}
        </Detail.BadgeGroup>
      </Detail>
    </>
  )
}

export default App
