import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  function handleEditing() {
    setIsEditing(!isEditing);
  }

  return (
    <li>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{name}</span>
        ) : (
          <input type="text" required></input>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      {!isEditing ? (
        <button onClick={handleEditing}>Edit</button>
      ) : (
        <button onClick={handleEditing}>Save</button>
      )}
    </li>
  );
}
