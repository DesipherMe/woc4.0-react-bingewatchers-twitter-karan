import React from "react";

function HeaderItem({ active, text, Icon }) {
  return (
    <div className={`headerItem ${active && `headerItem--active`}`}>
      <Icon />
      <h3>{text}</h3>
    </div>
  );
}

export default HeaderItem;
