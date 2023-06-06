import React from 'react';
import { viewContext } from './app';

export default function BandCard({ gig }) {
  const { setView } = React.useContext(viewContext);
  const handleClick = (e) => {
    setView('gigPage')
  }

  return (
    <>
      <h3>{gig.gigname}</h3>
      <p>Where: {gig.location}</p>
      <p>When: {gig.date}</p>
      <p>Gear: {gig.gear_needed}</p>
      <button type="button" onClick={handleClick}> view </button>
    </>
  )
}