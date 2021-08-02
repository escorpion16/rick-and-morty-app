import styles from './LocationInfo.module.css';

export const LocationInfo = ({name, type, dimension, residents}) => {


    return (
        <div className={styles.locationInfoContainer}>
            <p>Name: {name}</p>  
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
            <p>Number of Residents: {residents}</p>
        </div>
    )
}
