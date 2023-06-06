import React from 'react';
import axios from 'axios';
import BandList from './bandList';
import BandPage from './bandPage/bandPage';

export const viewContext = React.createContext(null)

export default function App() {
  const [view, setView] = React.useState('');
  const [member, setMember] = React.useState({})

  React.useEffect(() => {
    axios.get('/member', {params: {member_id: 2}})
    .then(res => {
      console.log(res.data)
      setmember(res.data[0])
    })
  },[])

  switch (view) {
    case 'Bands':
    return (
      <>
        <h1>GigMate/{member.name}/Bands</h1>
        <viewContext.Provider  value= {{ setView, member }}>
          <BandList />
        </viewContext.Provider>
      </>
    );
    case 'BandPage':
    return (
      <>
        <h1>GigMate/${member.name}</h1>
        <viewContext.Provider  value= {{ setView, member }}>
          <BandPage />
        </viewContext.Provider>
      </>
    );
    default:
    }
  setView('Bands')
  return <div>Loading...</div>
}