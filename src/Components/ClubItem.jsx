import React from 'react';

function ClubItem({ club }) {
  return (
    <div className="ClubItem">
      <img src={club.escudos['60x60']} alt={`${club.nome} logo`} />
      <h2>{club.nome}</h2>
      <p>{club.apelido}</p>
    </div>
  );
}

export default ClubItem;