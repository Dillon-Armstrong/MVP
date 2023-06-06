import React from 'react';
import axios from 'axios';
import BandCard from './bandCard';
import { viewContext } from '../app';

export default function BandList({ member, bands }) {
  return (

    bands.map(band => <BandCard key={band.band_id} band={band} />)

  )
}