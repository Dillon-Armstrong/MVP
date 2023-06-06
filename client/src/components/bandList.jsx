import React from 'react';
import axios from 'axios';
import BandCard from './bandCard';

export default function BandList() {
  const [bands, setBands] = React.useState([])
  React.useEffect(() => {
    axios.get('/bands', {params: {member_id: 2}})
    .then(res => {
      console.log(res.data)
      setBands(res.data)
    })
  },[])
  return (
    bands.length
    ? bands.map(band => <BandCard key={band.band_id} band={band} />)
    : <></>
  )
}