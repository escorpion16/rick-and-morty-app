import { useEffect, useState } from 'react';
import './App.css';
import { LocationContainer } from './components/LocationContainer';

import { SearchBox } from './components/SearchBox';

function App() {

  const [data , setData]  = useState([])
  const [universe, setUniverse] = useState('')

  const onSelect = (value) => {
    console.log(value)
    setUniverse(value)

  }
  
  useEffect(() => {
    
    const miFunc = async() => {
      const res = await fetch('https://rickandmortyapi.com/api/location')
      .then( res => res.json())

      setData(res.results)
  
    }
    miFunc()
  
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <SearchBox data={data} handleSelect={onSelect} />
        <LocationContainer name={universe}/>
      </header>
    </div>
  );
}

export default App;
