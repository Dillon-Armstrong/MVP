import React from 'react';
import SignIn from './signin';
import SignUp from './form';

export default function LandingPage() {
  return (
    <div className="page card">
      <SignIn />
        or
      <SignUp />
    </div>
  )
}