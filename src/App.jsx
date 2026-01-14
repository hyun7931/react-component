// src/App.jsx
import React from 'react'
import Detail from './components/Detail/Detail'
import './styles/theme.css'
import { TERMS_DATA, AI_SUMMARY_DATA } from './assets/termsDummyData'

function App() {
  return (
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
  )
}

export default App
