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
const Group = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="st-agreement-header" onClick={() => setIsOpen(!isOpen)}>
        <Text variant="large" tone="main">{title || "약관 전체동의"}</Text>
        <RightArrow />
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
        <Text variant="small" tone="muted">
          {children}
        </Text>
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