import React from 'react';

type PlayerCardProps = {
  name: string;
  position: string;
};

const PlayerCard: React.FC<PlayerCardProps> = ({ name, position }) => (
  <div className="card">
    <h2>{name}</h2>
    <p>{position}</p>
  </div>
);

export default PlayerCard;
