import { useState } from "react";

function ExtensionCard({ logo, name, description, isActive, onToggle, onRemove }) {
  return (
    <div className="DevLens">
      <div className="Text">
        <img src={logo} alt=""></img>
        <div>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="Buts">
        <button className="Remove" onClick={onRemove}>Remove</button>
        <button className="Remove" onClick={onToggle}>
          {isActive ? "Active" : "Inactive"}
        </button>
      </div>
    </div>
  );
}

export default ExtensionCard;