import React from 'react';
import GigList from './gigsList';
import Members from './members';

export default function BandPage({ setView }) {
  const handleClick = (e) => {
    setView('Bands')
  }
  return (
    <>
      <button onClick={handleClick}> {'<- Bands'} </button>
      <Members />
      <GigList />
    </>
  )
}