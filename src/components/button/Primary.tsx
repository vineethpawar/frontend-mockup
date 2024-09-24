import React, { ReactNode } from "react";

const PrimaryBtn: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div
      style={{
        userSelect: "none",
        cursor: "pointer",
        color: "white",
        outline: 0,
        border: "1px solid #7261FF",
        background: "#7261FF",
        borderRadius: "5px",
        padding: "8px 20px",
      }}
    >
      {children}
    </div>
  );
};

export default PrimaryBtn;
