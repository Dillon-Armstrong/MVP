import React from 'react';
import axios from 'axios';
import GigCard from './gigCard';
import GigForm from './gigForm';
import { viewContext } from '../app';

export default function GigsList() {
  const { gigs, currentBand } = React.useContext(viewContext);
  const [form, setForm] = React.useState(false);

  return (
    <>
      {form
      ? <GigForm band={currentBand} setForm={setForm}/>
      : <button onClick={() => {setForm(true)}}>Add a Gig</button>
      }
      {gigs.map(gig => <GigCard key={gig.gig_id} gig={gig}/>)}
    </>
  )
}