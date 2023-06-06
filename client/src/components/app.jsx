import React from 'react';
import axios from 'axios';
import BandList from './memberHome/bandList';
import BandPage from './bandPage/bandPage';

export const viewContext = React.createContext(null)

export default function App() {
  const [view, setView] = React.useState('');
  const [member, setMember] = React.useState({});
  const [bands, setBands] = React.useState([]);
  const [currentBand, setCurrentBand] = React.useState({});
  const [gigs, setGigs] = React.useState([]);

  React.useEffect(() => {
    axios.get('/member', {params: {member_id: 2}})
    .then(res => {
      setMember(res.data[0]);
      return axios.get('/bands', {params: {member_id: res.data[0].member_id}})
    })
    .then(res => {
      setBands(res.data)
    })
    .catch(err => {
      throw Error(err);
    })
  },[])

  // const getGigs = (band) => {
  //   setCurrentBand(band);
  //   console.log(band)
  //   axios.get('/gigs', {params: {band_id: band.band_id}})
  //     .then(res => {
  //       setGigs(res.data)
  //       setView('BandPage');
  //     })
  //     .catch(err => {
  //       throw Error(err)
  //     })
  // }

  switch (view) {
    case 'Bands':
    return (
      <>
        <h1>GigMate/{member.name}/Bands</h1>
        <viewContext.Provider  value= {{ setView, setCurrentBand, setGigs }}>
          <BandList member={member} bands={bands}/>
        </viewContext.Provider>
      </>
    );
    case 'BandPage':
    return (
      <>
        <h1>GigMate/${member.name}/{currentBand.band_name}</h1>
        <viewContext.Provider  value= {{ gigs }}>
          <BandPage setView={setView} />
        </viewContext.Provider>
      </>
    );
    default:
    }
  setView('Bands')
  return <div>Loading...</div>
}