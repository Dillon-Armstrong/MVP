import React from 'react';
import axios from 'axios';
import GigCard from './gigCard';
import { viewContext } from '../app';

export default function GigsList() {
  const [gigs, setGigs] = React.useState([])
  const { currentBand } = React.useContext(viewContext)
  // React.useEffect(() => {
  //     axios.get('/gigs', {params: {band_id: currentBand.band_id}})
  //     .then(res => {
  //       console.log(res.data)
  //       setGigs(res.data)
  //     })
  //     .catch(err => {
  //       throw Error(err)
  //     })
  // },[currentBand])

  return (
    gigs.length
    ? gigs.map(gig => <GigCard key={gig.band_id} gig={gig} />)
    : <div>getting your gigs</div>
  )
}