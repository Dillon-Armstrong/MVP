import React from 'react';
import bcrypt from 'bcryptjs';
import axios from 'axios';

export default function SignUp() {
  const [password, setPassword] = useState('')

  const sliceSpuds = (e) => {
    setPassword(e.taget.value)
  }

  const hash = (potatoes) => {
    const salt = bcrypt.genSaltSync(10);
    const browns = bcrypt.hashSync(potatoes, salt);
  }

  const registerUser = (e) => {
    e.preventDefault()
    const hashBrowns = hash(potatoes);
    const form = new FormData(e.target);
    form.append('password', hashBrowns);
    const breakfast = Object.fromEntries(form.entries());
    console.log(breakfast)
  }

  return (
   <>
     <form onSubmit={registerUser}>
      <label>
        Username: <input name="name" required />
      </label>
      <label>
        Email: <input type="email" name="member_email" required />
      </label>
      <label>
        Password: <input type="password" name="password" minlength="8" onChange={sliceSpuds} required />
      </label>
     </form>
   </>
  )
}