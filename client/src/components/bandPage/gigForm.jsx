import React from 'react';
import GearModal from './gearModal';
import axios from 'axios';
import { viewContext } from '../app';

export default function GigForm({ band, setForm }) {
  const [modal, setModal] = React.useState(false);
  const { goToBandPage } = React.useContext(viewContext);

  const submitForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.target)
    const formObject = Object.fromEntries(form.entries());
    formObject.band=band.band_id;
    axios.post('/gigs', formObject)
      .then(res => {
        setForm(false);
        goToBandPage(band)
      })
      .catch((err) => {
        setForm(false);
        console.log(err)
        alert('Service unavailable right now. Please try again later');
      })
  }

  return (
    <div className="modal-container">
      <form className="modal" onSubmit={submitForm}>
        <label>
          What? <input name="gigname"  required/>
        </label>
        <label>
          When? <input name="date" required/>
        </label>
        <label>
          Where? <input name="location" required/>
        </label>
        <div> How much gear do we need to bring?
          <label><input type="radio" name="gear_needed" value="The basics"/>The Basics</label>
          <label><input type="radio" name="gear_needed" value="Be prepared" defaultChecked={true} />Be Prepared</label>
          <label><input type="radio" name="gear_needed" value="Full setup"/>Full Setup</label>
          {modal
          ? <GearModal type="all" setModal={setModal} />
          : <button onClick={() => setModal(true)}>?</button>}
        </div>
        <button type="submit" >submit</button>
        <button onClick={() => setForm(false)}>x</button>
      </form>
    </div>
  )
}