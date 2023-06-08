import React from 'react';

export default function GearModal({ type, setModal }) {
  const [description, setDescription] = React.useState([]);

  React.useEffect(() => {
    if (type === 'Full setup') {
      setDescription([`
      This venue (if you can call it that) has little to no equipment.
      Bring amps, monitors, PA, cables, the whole drumset, that little adapter you always forget, and an extra mic;
      Another band is gonna ask to borrow one.
      `]);
    } else if (type === 'Be prepared') {
      setDescription([`
      This venue has a decent setup. Just bring some extra cables and you're own mics(duh).
      Maybe a couple amps to be on the safe side.
      But they're usually missing a few things. Like that adapter you always forget to bring.
      `]);
    } else if (type === 'The basics') {
      setDescription([`
      Now THIS is a venue! Just bring your instrument. It's plug and play in less than 5.
      You'll probably remember that one adapter but you wont need it.
      `]);
    } else if (type === 'all') {
      setDescription([`
      FULL SETUP
      This venue (if you can call it that) has little to no equipment.
      Bring amps, monitors, PA, cables, the whole drumset, that little adapter you always forget, and an extra mic;
      Another band is gonna ask to borrow one.`,

      `BE PREPARED
      This venue has a decent setup. Just bring some extra cables and you're own mics(duh).
      Maybe a couple amps to be on the safe side.
      But they're usually missing a few things. Like that adapter you always forget to bring.`,

      `THE BASICS
      Now THIS is a venue! Just bring your instrument. It's plug and play in less than 5.
      You'll probably remember that one adapter but you wont need it.
      `])
    }
  },[])
  return (
    <div className="modal-container" onClick={() => { setModal(false) }} >
      <div className="modal">{description.map(d => <div>{d}</div>)}</div>
    </div>
  )
}