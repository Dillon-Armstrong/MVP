import React from 'react';
import BandList from './bandList';
import GigsList from './gigsList';

export const viewContext = React.createContext(null)

export default function App() {
  const [view, setView] = React.useState('')
  return (
    <>
      <h1>GigMate</h1>
      {(() => {
        switch (view) {
        case 'Bands':
          return (
            <>
              <viewContext.Provider  value= {{ setView }}>
                <BandList />
              </viewContext.Provider>
            </>
        );
        case 'BandPage':
          return (
            <>
              <viewContext.Provider  value= {{ setView }}>
                <GigsList />
              </viewContext.Provider>
            </>
        );
        default:
          setView('Bands')
          return null
        }
      })()}
    </>
  )
}