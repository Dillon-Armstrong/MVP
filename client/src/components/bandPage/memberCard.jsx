import React from 'react';
import avatar from '../../../dist/icons8-avatar-48.png';


export default function MemberCard({ member }) {
  return (
    <div className="members card">
      <img
        style={{
            border: '3px solid blue',
            boxShadow: '0 0 10px blue',
            padding: 'unset',
            borderRadius: '8px',
            borderWidth: '.25px',
          }}
        className="avatar"
        alt="avatar"
        src={avatar}
      />
      <div>{member.name} on: </div>
      <div>
        {member.role.map(r => <div>{r}</div>)}
      </div>
    </div>
  )
}