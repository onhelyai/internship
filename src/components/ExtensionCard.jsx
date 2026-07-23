import { useState } from "react";

function ExtensionCard({ logo, name, description, isActive, onToggle, onRemove }) {
  return (
    <div className="DevLens">
      <div className="Text">
        <img src={logo} alt=""></img>
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="Buts">
        <button className="Remove" onClick={onRemove}>Remove</button>
        <button className={isActive ? "switch on" : "switch"} 
          onClick={onToggle}>
          <span className="switch-thumb"></span>
        </button>
      </div>
    </div>
  );
}

export default ExtensionCard;