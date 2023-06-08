import React from 'react';
import bcrypt from 'bcryptjs-react';
import axios from 'axios';
import { viewContext } from '../app';

export default function SignUp() {
  const [password, setPassword] = React.useState('')
  const { goToMemberHome } = React.useContext(viewContext);

  const sliceSpuds = (e) => {
    setPassword(e.target.value)
  }

  const hash = (potatoes) => {
    const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, salt);
    return browns
  }

  const registerUser = (e) => {
    e.preventDefault()
    const hashBrowns = hash(password);
    const form = new FormData(e.target);
    const breakfast = Object.fromEntries(form.entries());
    breakfast.password = hashBrowns;
    axios.post('/newUser', breakfast)
      .then(res => {
        console.log('member info saved')
        goToMemberHome(breakfast.email)
      })
      .catch(err => {
        console.log(err)
        if (res.status === 406) {
          alert('Email already registered with this site. Did you mean to log in?')
        }
      })
  }

  return (
   <div id="register">
     <form onSubmit={registerUser}>
      <label>
        Username: <input name="name" required />
      </label>
      <label>
        Email: <input type="email" name="email" required />
      </label>
      <label>
        Password: <input type="password" minlength="8" onChange={sliceSpuds} value={password} required />
      </label>
      <button type="submit" >register</button>
     </form>
   </div>
  )
}