import React from 'react';

export default function GearModal({ type, setModal }) {
  console.log('rendered')
  return (
    <div className="modal-container" onClick={() => { setModal(false) }} >
      <div className="modal">{type}</div>
    </div>
  )
}