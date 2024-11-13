// src/app/page.tsx
import React from "react";
import { examplePlayer} from "./data/mockPlayer";

const PlayerPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Hello World</h1>
      <h2>Player Information</h2>
      <div>
        <p><strong>Name:</strong> {examplePlayer.name}</p>
        <p><strong>Position:</strong> {examplePlayer.position}</p>
        <p><strong>Nationality:</strong> {examplePlayer.nationality}</p>
        <p><strong>Height:</strong> {examplePlayer.height} cm</p>
        <p><strong>Preferred Foot:</strong> {examplePlayer.preferredFoot}</p>
        <p><strong>Overall Rating:</strong> {examplePlayer.overallRating}</p>
        <h3>Stats</h3>
        <ul>
          <li><strong>Speed:</strong> {examplePlayer.speed}</li>
          <li><strong>Acceleration:</strong> {examplePlayer.acceleration}</li>
          <li><strong>Stamina:</strong> {examplePlayer.stamina}</li>
          <li><strong>Strength:</strong> {examplePlayer.strength}</li>
          <li><strong>Control:</strong> {examplePlayer.control}</li>
          <li><strong>Passing:</strong> {examplePlayer.passing}</li>
          <li><strong>Shooting:</strong> {examplePlayer.shooting}</li>
          <li><strong>Tackling:</strong> {examplePlayer.tackling}</li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerPage;
