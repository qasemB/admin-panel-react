import React from "react";

const SpinnerLoad = ({ colorClass, isSmall, inline }) => {
  return (
    <span
      className={`text-center ${!inline ? "d-block" : "mx-2"} ${colorClass}`}
    >
      <div
        className={`spinner-border ${isSmall ? "spinner-border-sm" : ""}`}
        role="status"
      ></div>
    </span>
  );
};

export default SpinnerLoad;
