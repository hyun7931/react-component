import { useState } from "react";
import RightArrow from "./RightArrow"; 
import CheckBox from "./CheckBox"; 
import Text from "./Text"; 
import './Agreement.css';

// 드롭다운
const Group = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="st-agreement-header" onClick={() => setIsOpen(!isOpen)}>
        {typeof title === "string" ? (
          <Text variant="large" tone="main">{title}</Text>
        ) : (
          title
        )}
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