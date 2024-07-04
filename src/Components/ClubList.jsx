import React from 'react';
import ClubItem from './ClubItem';

function ClubList({ clubs }) {
  return (
    <div className="ClubList">
      {clubs.map(club => (
        <ClubItem key={club.id} club={club} />
      ))}
    </div>
  );
}

export default ClubList;