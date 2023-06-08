import React from 'react';
import GoogleSignInButton from './googleButton';
import bcrypt from 'bcryptjs-react';
import axios from 'axios';
import { viewContext } from '../app';

export default function SignIn() {
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

  const signIn = (e) => {
    e.preventDefault()
    const hashBrowns = hash(password);
    const form = new FormData(e.target);
    const breakfast = Object.fromEntries(form.entries());
    breakfast.password = hashBrowns;
    axios.post('/login', breakfast)
      .then(res => {
        if (res.status === 200) {
          goToMemberHome(breakfast.email);
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={signIn}>
        <label>
          email: <input name="email" type="email" required />
        </label>
        <label>
          password: <input name="password" type="password" required />
        </label>
        <button type="submit">log in</button>
      </form>
    </div>
  )
}