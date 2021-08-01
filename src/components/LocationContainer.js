import { useEffect, useState } from "react"
import { LocationInfo } from './LocationInfo';
import { ResidentContainer } from './ResidentContainer';

export const LocationContainer = () => {

    const [ location, setLocation ] = useState(null)
    const [ residents, setResidents ] = useState([])

    useEffect(() => {
        const miFunc = async() => {
          const res = await fetch('https://rickandmortyapi.com/api/location')
          .then( res => res.json())
    
          console.log(res)
          setLocation(res.results[0])
          setResidents(res.results[0].residents)
        }
    
        miFunc()
    }, [])

    const list = residents.slice(0,10).map(value => <ResidentContainer key={value} residentUrl={value} />)
    
    return (
        <div>
            { location && <LocationInfo name={location.name} type={location.type} dimension={location.dimension} />}
            { list }    
        </div>
    )
}
