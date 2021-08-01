import styles from './ResidentInfo.module.css';

export const ResidentInfo = ({ name, image, status, origin, episode }) => {
    return (
        <div className={styles.residentInfoContainer} key={name}>
            <div className={styles.residentInfoImg}>
                <img src={image} alt={name}  />
            </div>
            <div className={styles.residentInfoContent}>
                <h5>Name: {name}</h5>
                <h5>Status: {status}</h5>
                <h5>Origin: {origin}</h5>
                <h5># Episodes: {episode}</h5>
            </div>  
        </div>
    )
}
