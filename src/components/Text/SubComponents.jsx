// src/components/Text/SubComponents.jsx
import React from 'react'
import './Text.css'

export const Title = ({ children, className = '' }) => (
  <h2 className={`st-text__title ${className}`}>{children}</h2>
)

export const Subtitle = ({ children, className = '' }) => (
  <h4 className={`st-text__subtitle ${className}`}>{children}</h4>
)

export const Body = ({ children, className = '' }) => (
  <p className={`st-text__body ${className}`}>{children}</p>
)
