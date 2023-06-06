import React from 'react';
import axios from 'axios';
import GigCard from './gigCard';

export default function GigsList() {
  const [gigs, setGigs] = React.useState([])
  React.useEffect(() => {
    axios.get('/gigs', {params: {band_id: 3}})
    .then(res => {
      console.log(res.data)
      setGigs(res.data)
    })
  },[])
  return (
    gigs.length
    ? gigs.map(gig => <GigCard key={gig.band_id} gig={gig} />)
    : <div>getting your gigs</div>
  )
}