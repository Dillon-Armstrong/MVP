import React from 'react';
import axios from 'axios';

export default function Members() {
const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    axios.get('/members', {params: {band_id: 3}})
    .then(res => {
      setMembers(res.data)
    })
  },[])

  return (
    members.map(member => <div key={member.member_id}>{member.name}</div>)
  )
}