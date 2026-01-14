import { useState } from 'react'
import Detail from './components/Detail/Detail'

function App() {
  return (
    <>
      <Detail onConfirm={() => alert('확인되었습니다.')}>
        <h2 className='st-detail__title'>문서 제목</h2>
        <div className='st-detail__content'>
          {[...Array(20)].map((_, index) => (
            <p key={index}>
              이것은 예시 문서 내용입니다. 스크롤을 내려서 마지막까지
              읽어주세요.
            </p>
          ))}
        </div>
      </Detail>
    </>
  )
}

export default App
