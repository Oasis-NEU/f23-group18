import React from 'react';
import './ArtistBox.css';

function ArtistBox({ name, imageUrl }) {
  return (
    <div className="artist-box">
      <img src={imageUrl} alt={name} className="artist-image"/>
      <h3 className="artist-name">{name}</h3>
    </div>
  );
}

export default ArtistBox;
