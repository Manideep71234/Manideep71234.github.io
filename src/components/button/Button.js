import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className = "",
  href,
  newTab,
  onClick,
  download
}) {
  const WrapperTag = href ? "a" : "button";

  return (
    <div className={className}>
      <WrapperTag
        className="main-button"
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        onClick={onClick}
        download={download}
      >
        {text}
      </WrapperTag>
    </div>
  );
}
