// src/App.jsx
import React, { useState } from 'react'
import Detail from './components/Detail/Detail'
import Agreement from './components/Agreement/Agreement'
import './styles/theme.css'
import { TERMS_DATA, AI_SUMMARY_DATA } from './assets/termsDummyData'

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [showDetail, setShowDetail] = useState(false) // 약관으로 이동
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="st-container" style={{ padding: '50px 20px' }}>

      {!showDetail && (
        <Agreement>
          <div className="agreement-card">
            <Agreement.Group
              isOpen={isDropdownOpen}
              onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
              title={
                <div style={{ display: 'flex', gap: '4px' }}>
                  <Agreement.Text tone="primary">[필수]</Agreement.Text>
                  <Agreement.Text tone="main">개인정보 수집 및 이용 동의</Agreement.Text>
                </div>
              }
            >
              <Agreement.Row 
                isChecked={isChecked} 
                onCheck={() => setIsChecked(!isChecked)}
                onGoDetail={() => setShowDetail(true)}
              >
                <Agreement.Text variant="small" tone="muted">
                  개인정보 수집 및 이용 동의 (필수)
                </Agreement.Text>
              </Agreement.Row>
            </Agreement.Group>
          </div>
        </Agreement>
      )}

      {showDetail && (
        <Detail 
        onConfirm={
          () => {
            // 상세 페이지 닫고 목록으로 돌아감
            setShowDetail(false);
            // 동시에 체크박스 체크 상태로 변경
            setIsChecked(true);
            // 돌아와도 드롭다운 열려있음
            setIsDropdownOpen(true);
          }}
        >
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
      )}
    </div>
  )
}

export default App