// src/components/Detail/Detail.jsx
import React from 'react';
import { Title, Subtitle, Body } from './Text';
import './Detail.css';

// 1. 메인 컨테이너 컴포넌트
const Detail = ({ children }) => {
  return <div className="st-detail-container">{children}</div>;
};

// 2. 하위 컴포넌트들을 Detail 객체에 할당 (이것이 핵심 로직)
Detail.Title = Title;
Detail.Subtitle = Subtitle;
Detail.Body = Body;

export default Detail;