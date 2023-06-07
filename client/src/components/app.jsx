import React from 'react';
import axios from 'axios';
import BandList from './memberHome/bandList';
import BandPage from './bandPage/bandPage';
import LandingPage from './login/page';

export const viewContext = React.createContext(null)

export default function App() {
  const [view, setView] = React.useState('signin');
  const [member, setMember] = React.useState({});
  const [bands, setBands] = React.useState([]);
  const [currentBand, setCurrentBand] = React.useState({});
  const [gigs, setGigs] = React.useState([]);


  const goToBandPage = (band) => {
    setCurrentBand(band)
    setView('BandPage');
    axios.get('/gigs', {params: {band_id: band.band_id}})
    .then(res => {
      setGigs(res.data)
    })
    .catch(err => {
      throw Error(err)
    })
  }
  const goToMemberHome = () => {
    axios.get('/member', {params: {member_id: 2}})
    .then(res => {
      setMember(res.data[0]);
      return axios.get('/bands', {params: {member_id: res.data[0].member_id}})
    })
    .then(res => {
      setBands(res.data)
      setView('MemberHome')
    })
    .catch(err => {
      throw Error(err);
    })

  }
  // React.useEffect(() => {
  //   goToMemberHome()
  // },[])

  switch (view) {
    case 'MemberHome':
    return (
      <>
        <h1>GigMate/{member.name}/Bands</h1>
        <viewContext.Provider  value= {{ goToBandPage, setCurrentBand }}>
          <BandList member={member} bands={bands}/>
        </viewContext.Provider>
      </>
    );
    case 'BandPage':
    return (
      <>
        <h1>
          <button onClick={goToMemberHome}> {'<- Bands'} </button>
          GigMate/${member.name}/{currentBand.band_name}
        </h1>
        <div className="page">
          <viewContext.Provider  value= {{ goToBandPage, gigs, currentBand }}>
            <BandPage />
          </viewContext.Provider>
        </div>
      </>
    );
    case 'signin':
    return (
      <LandingPage />
    )
    default:
    }
  setView('signin')
  return <div>Loading...</div>
}