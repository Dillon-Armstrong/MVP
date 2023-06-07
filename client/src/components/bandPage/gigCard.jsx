import React from 'react';
import GearModal from './gearModal';
import { viewContext } from '../app';
import axios from 'axios';

export default function GigCard({ gig }) {
  const { goToBandPage, currentBand} = React.useContext(viewContext);
  const [modal, setModal] = React.useState(false);

  const removeGig = (e) => {
    e.preventDefault();
    axios.delete('/gigs', {params: { gig_id: gig.gig_id, band_id: currentBand.band_id }})
      .then(res => {
        console.log('success');
        goToBandPage(currentBand);
      })
      .catch(err => {
        alert('cannot delete right now')
      })
  }

  return (
    <>
      <h3>{gig.gig_name}</h3>
      <p>Where: {gig.location}</p>
      <p>When: {gig.date}</p>
      <div>Gear: {gig.gear_needed}
      {
        modal
        ? <GearModal type = {gig.gear_needed} setModal={setModal}/>
        : <button type="button" onClick={() => { setModal(true) }}> ? </button>
      }
      </div>
      <button type="delete" onClick={removeGig}>remove</button>
    </>
  )
}