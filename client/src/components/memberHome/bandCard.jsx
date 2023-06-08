import React from 'react';
import axios from 'axios';
import { viewContext } from '../app';

export default function BandCard({ band }) {
  const { setCurrentBand, goToBandPage } = React.useContext(viewContext);

  const handleClick = (e) => {
    e.preventDefault();
    setCurrentBand(band);
    goToBandPage(band);
  }

  return (
    <div className="card">
      <h3>{band.band_name}</h3>
      <p>members: {band.members.length}</p>
      <p>upcoming gigs: {band.gigs}</p>
      <button type="button" onClick={handleClick}> view </button>
    </div>
  )
}