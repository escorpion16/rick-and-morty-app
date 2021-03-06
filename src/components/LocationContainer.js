import { useEffect, useState } from "react"
import { LocationInfo } from './LocationInfo';
import { ResidentContainer } from './ResidentContainer';
import styles from './LocationContainer.module.css';

export const LocationContainer = ({ name }) => {

    const [ location, setLocation ] = useState(null)
    const [random] = useState(3)
    const [universe, setUniverse] = useState("")

    useEffect(() => {
        if(name !== ""){
            setUniverse(name)
        }
    }, [name])

    useEffect(() => {

        const miFuncDefault = async() => {
            
            const url = `https://rickandmortyapi.com/api/location/${random}`;
            const res = await fetch(url).then( res => res.json())
    
            setLocation(res.results)
        
        }
       
        if(universe === ""){

            miFuncDefault()
        }
        
        // eslint-disable-next-line
    },[])

    useEffect(() => {
        const miFunc = async() => {
          const res = await fetch(`https://rickandmortyapi.com/api/location/?name=${universe}`)
          .then( res => res.json())
          
          setLocation(res.results[0])
        }

        if(universe !== ""){
            miFunc()
        }
    
    }, [universe])
    
    const list = location && location.residents.slice(0,10).map(value => < ResidentContainer key={value} residentUrl={value}  /> )

    return (
        <div>
            { location && <LocationInfo name={location.name} type={location.type} dimension={location.dimension} residents={location.residents.length} />}
            <div className={styles.locationContainerResidents}>
                { list }
            </div>
        </div>
    )
}
