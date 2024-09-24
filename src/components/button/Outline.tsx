import React, { ReactNode } from "react";

const OutlineBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        userSelect: "none",
        cursor: "pointer",
        color: "#7261FF",
        outline: 0,
        border: "1px solid #7261FF",
        borderRadius: "5px",
        padding: "8px 20px",
      }}
    >
      {children}
    </div>
  );
};

export default OutlineBtn;
