import React from 'react';
import axios from 'axios';
import GigCard from './gigCard';
import { viewContext } from '../app';

export default function GigsList() {
  const { gigs } = React.useContext(viewContext);
  const [loading, setLoading] = React.useState(true);

  return (
    gigs.map(gig => <GigCard key={gig.gig_id} gig={gig} />)
  )
}