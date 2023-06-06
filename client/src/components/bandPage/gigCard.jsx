import React from 'react';
import GearModal from './gearModal';
import { viewContext } from '../app';

export default function BandCard({ gig }) {
  const { setView } = React.useContext(viewContext);
  const [modal, setModal] = React.useState(false)

  return (
    <>
      {/* {() => {switch (modal) {
        case 'The basics':
           <GearModal type={'The basics'} />;
        case 'Full setup':
           <GearModal type={'Full setup'} />;
        case 'Be prepared':
           <GearModal type={'BePrepared'} />;
        default:
          null;
      }}()} */}
      <h3>{gig.gigname}</h3>
      <p>Where: {gig.location}</p>
      <p>When: {gig.date}</p>
      <p>Gear: {gig.gear_needed}
      {
        modal
        ? <GearModal type = {gig.gear_needed} setModal={setModal}/>
        : <button type="button" onClick={() => { setModal(true) }}> ? </button>
      }
      </p>
    </>
  )
}