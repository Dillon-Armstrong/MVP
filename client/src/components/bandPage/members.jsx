import React from 'react';
import axios from 'axios';
import MemberCard from './memberCard';

export default function Members() {
const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    axios.get('/members', {params: {band_id: 3}})
    .then(res => {
      setMembers(res.data)
    })
  },[])

  return (
    <div className="page-section">
      <h2> Band Mates </h2>
      {members.map(member => <MemberCard key={member.member_id} member={member} />)}
    </div>
  )
}