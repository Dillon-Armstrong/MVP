import React from 'react';
import { viewContext } from './app';

export default function BandCard({ band }) {
  const { setView } = React.useContext(viewContext);
  const handleClick = (e) => {
    e.preventDefault();
    setView('BandPage')
  }

  return (
    <>
      <h3>{band.band_name}</h3>
      <p>members: {band.members.length}</p>
      <p>upcoming gigs: {band.gigs}</p>
      <button type="button" onClick={handleClick}> view </button>
    </>
  )
}