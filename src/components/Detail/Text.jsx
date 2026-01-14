// src/components/Detail/Text.jsx
import React from 'react'
import './Detail.css'

export const Title = ({ children }) => (
  <h2 className={`st-text__title`}>{children}</h2>
)

export const Subtitle = ({ children }) => (
  <h4 className={`st-text__subtitle`}>{children}</h4>
)

export const Body = ({ children }) => (
  <p className={`st-text__body`}>{children}</p>
)
