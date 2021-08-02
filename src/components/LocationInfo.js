import styles from './LocationInfo.module.css';

export const LocationInfo = ({name, type, dimension, residents}) => {


    return (
        <div className={styles.locationInfoContainer}>
            <p className={styles.neon} >Name: {name}</p>  
            <p className={styles.neon} >Type: {type}</p>
            <p className={styles.neon} >Dimension: {dimension}</p>
            <p className={styles.neon} >Number of Residents: {residents}</p>
        </div>
    )
}
