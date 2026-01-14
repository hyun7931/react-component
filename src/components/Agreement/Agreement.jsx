// src/components/Agreement/Agreement.jsx
import React, { useState } from "react";
import CheckBox from "./CheckBox";
import RightArrow from "./RightArrow";
import Text from "./Text";
import "./Agreement.css";

const Agreement = ({ children }) => {
  return <div className="st-agreement-container">{children}</div>;
};

// 드롭다운
const Group = ({ title, children, isOpen, onToggle }) => {
  return (
    <>
      <div className="st-agreement-header" onClick={onToggle}>
        {typeof title === "string" ? (
          <Text variant="large" tone="main">{title}</Text>
        ) : (
          title
        )}
        <div style={{ transform: isOpen ? 'rotate(270deg)' : 'rotate(90deg)', transition: '0.2s' }}>
          <RightArrow />
        </div>
      </div>

      {isOpen && <div className="st-agreement-dropdown">{children}</div>}
    </>
  );
};

// 체크박스
const Row = ({ isChecked, onCheck, onGoDetail, children }) => {
  return (
    <div className="st-agreement-content">
      <div className="st-agreement-flex-group">
        <CheckBox checked={isChecked} onChange={onCheck} />
        {children}
      </div>

      <RightArrow
        onClick={(e) => {
          e.stopPropagation();
          if (onGoDetail) onGoDetail();
        }}
      />
    </div>
  );
};

// 하위 컴포넌트 할당
Agreement.Group = Group;
Agreement.Row = Row;
Agreement.Text = Text;
Agreement.CheckBox = CheckBox;
Agreement.RightArrow = RightArrow;

export default Agreement;