import React from 'react';

export default function MemberCard({ member }) {
  return (
    <div className="members">
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
        src={'find an image'}
      />
      <div>{member.name}</div>
      <div>{member.role[0]}</div>
    </div>
  )
}