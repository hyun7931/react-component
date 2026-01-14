// src/components/Detail/Detail.jsx
import React, { useState, useRef } from 'react'
import { Title, Subtitle, Body } from './Text'
import { BadgeGroup, BadgeItem } from './AiBadgeText'
import './Detail.css'

const Detail = ({ children, onConfirm }) => {
  const [isBottom, setIsBottom] = useState(false)
  const scrollRef = useRef(null)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current

    // 바닥에 도달했는지 확인 (오차 범위 5px로 넉넉하게)
    if (scrollHeight - scrollTop <= clientHeight + 5) {
      setIsBottom(true)
    }
  }

  return (
    <div className='st-detail__container'>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className='st-detail__scroll-view'
      >
        {children}
        <button
          className={`st-detail__confirm-button ${
            isBottom
              ? 'st-detail__confirm-button--active'
              : 'st-detail__confirm-button--disabled'
          }`}
          disabled={!isBottom} // 활성화 전에는 클릭 불가능
          onClick={onConfirm}
        >
          확인
        </button>
      </div>
    </div>
  )
}

// 2. 하위 컴포넌트들을 Detail 객체에 할당
Detail.Title = Title
Detail.Subtitle = Subtitle
Detail.Body = Body
Detail.BadgeGroup = BadgeGroup
Detail.BadgeItem = BadgeItem

export default Detail