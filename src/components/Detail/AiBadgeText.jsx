// src/components/Detail/AiBadgeText.jsx

export const BadgeGroup = ({ children }) => (
  <div className="st-ai-badge-group">
    {children}
  </div>
);

export const BadgeItem = ({ children }) => (
  <div className="st-ai-badge-item">
    {/* 동그라미 */}
    <div className="st-ai-badge-bullet" />
    {/* 텍스트 */}
    <div className="st-ai-badge-content">
      {children}
    </div>
  </div>
);