import styles from './LocationInfo.module.css';

export const LocationInfo = ({name, type, dimension}) => {


    return (
        <div className={styles.locationInfoContainer}>
            <p>Name: {name}</p>  
            <p>Type: {type}</p>
            <p>Dimension: {dimension}</p>
        </div>
    )
}
