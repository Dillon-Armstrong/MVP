import React from 'react';
import GigList from './gigsList';
import Members from './members';

export default function BandPage({ goToMemberHome }) {
  const handleClick = (e) => {
    goToMemberHome();
  }
  return (
    <>
      <button onClick={handleClick}> {'<- Bands'} </button>
      <Members />
      <GigList />
    </>
  )
}