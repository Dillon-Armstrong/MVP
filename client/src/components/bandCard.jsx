import React from 'react';
import axios from 'axios';
import { viewContext } from './app';

export default function BandCard({ band }) {
  const { setView, setCurrentBand, setGigs } = React.useContext(viewContext);
  const handleClick = (e) => {
    e.preventDefault();
    setCurrentBand(band);
    axios.get('/gigs', {params: {band_id: band.band_id}})
      .then(res => {
        setGigs(res.data)
      })
      .then(() => {
        setView('BandPage');
      })
      .catch(err => {
        throw Error(err)
      })
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