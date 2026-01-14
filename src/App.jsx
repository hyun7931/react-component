// src/App.jsx
import React, { useState, useEffect } from 'react'
import Detail from './components/Detail/Detail'
import Agreement from './components/Agreement/Agreement'
import './styles/theme.css'
import { TERMS_DATA, AI_SUMMARY_DATA } from './assets/termsDummyData'

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [showDetail, setShowDetail] = useState(false) // 약관으로 이동

  // [추가] 드롭다운 열림/닫힘 상태 관리 (기본값 false: 닫힘, true: 열림)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  //ai summary state
  const [aiSummary, setAiSummary] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  //showDetail이 true 될 때 (약간 상세로 들어갔을 때) API 호출하도록 함.
  useEffect(() => {
    if(showDetail) {
      fetchAiSummary()
    }
  }, [showDetail])

  const fetchAiSummary = async () => {
    setIsLoading(true)
    try{
      const response = await fetch('http://localhost:8080/api/v1/summary')
      const data = await response.json()
      setAiSummary(data.summary)
    } catch(e) {
      console.error("failed AI summary call: ", e)
      setAiSummary(['AI 요약을 불러오는 중 오류가 발생하였습니다.'])
    } finally {
      setIsLoading(false)
    }
  }



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
              <React.Fragment key={term.id}> 
                <Detail.Title>{term.subtitle}</Detail.Title>
                <Detail.Body>{term.content}</Detail.Body>
            </React.Fragment>
            </>
          )
        })}
        {/* AI 요약 섹션 */}
        <Detail.BadgeGroup>
          <Detail.Subtitle>AI 요약</Detail.Subtitle>
          {
            isLoading ? 
            (
              <Detail.BadgeItem>
                <Detail.Body>Gemini가 약관을 요약하고 있습니다...</Detail.Body>
              </Detail.BadgeItem>
            ) :
            aiSummary.map((line, index) => (
              <Detail.BadgeItem key={index}>
                <Detail.Body>{line}</Detail.Body>
              </Detail.BadgeItem>
            ))
          }
        </Detail.BadgeGroup>
      </Detail>
      )}
    </div>
  )
}

export default App