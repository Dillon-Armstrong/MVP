import React from 'react';
import axios from 'axios';
import BandCard from './bandCard';
import { viewContext } from './app';

export default function BandList({ member, bands }) {
  // const [bands, setBands] = React.useState([])

  // React.useEffect(() => {
  //   console.log(member)
  //   axios.get('/bands', {params: {member_id: member.member_id}})
  //   .then(res => {
  //     console.log(res.data)
  //     setBands(res.data)
  //   })
  // },[member])
  return (
    bands.length
    ? bands.map(band => <BandCard key={band.band_id} band={band} />)
    : <></>
  )
}