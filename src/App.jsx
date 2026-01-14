// src/App.jsx
import { useState } from 'react'
import Agreement from './components/Agreement/Agreement'
import Detail from './components/Detail/Detail'
import './styles/theme.css'

function App() {
  const [isChecked, setIsChecked] = useState(false)
  const [showDetail, setShowDetail] = useState(false) // 약관으로 이동

  return (
    <div className="st-container" style={{ padding: '50px 20px' }}>

      {!showDetail && (
        <Agreement>
          <Agreement.Group
            title={
              <div style={{ display: 'flex', gap: '4px' }}>
                <Agreement.Text tone="primary">[필수]</Agreement.Text>
                <Agreement.Text tone="main">개인정보 수집 및 이용 동의</Agreement.Text>
              </div>
            }
          >
            {/* 드롭다운 안에 들어갈 실제 체크 항목 */}
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
        </Agreement>
      )}

      {showDetail && (
        <Detail onConfirm={() => setShowDetail(false)}>
          <Detail.Title>서비스 이용 약관</Detail.Title>
          <Detail.Subtitle>제 1조 (목적)</Detail.Subtitle>
          <Detail.Body>이 약관은 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</Detail.Body>
          
          <Detail.BadgeGroup>
            <Detail.BadgeItem><Detail.Body>첫 번째 동글동글.</Detail.Body></Detail.BadgeItem>
            <Detail.BadgeItem><Detail.Body>두 번째 동글동글.</Detail.Body></Detail.BadgeItem>
          </Detail.BadgeGroup>
        </Detail>
      )}
    </div>
  )
}

export default App