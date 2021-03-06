import { useEffect, useState } from "react";
import { ResidentInfo } from './ResidentInfo';
import styles from './ResidentContainer.module.css';

export const ResidentContainer = ({ residentUrl }) => {

    const [ data , setData ] = useState('');

    useEffect(() => {
        const myFunc = async() => {
            const res = await fetch( residentUrl ).then(res => res.json())
            setData(res)
        }
        
        myFunc()

    }, [residentUrl])

    return (
        <div className={styles.residentContainerCard}>
            {data && <ResidentInfo 
                name={data.name} 
                image={data.image} 
                status={data.status} 
                origin={data.origin.name} 
                episode={data.episode.length} 
            />} 
        </div>
    )
}
