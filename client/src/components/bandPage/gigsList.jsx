import React from 'react';
import axios from 'axios';
import GigCard from './gigCard';
import { viewContext } from '../app';

export default function GigsList() {
  const { gigs } = React.useContext(viewContext);
  console.log(gigs)
  return (
    gigs
    ? gigs.map(gig => <GigCard key={gig.band_id} gig={gig} />)
    : <div>getting your gigs</div>
  )
}