import styles from './ResidentInfo.module.css';

export const ResidentInfo = ({ name, image, status, origin, episode }) => {
    return (
        <div className={styles.residentInfoContainer} key={name}>
            <div className={styles.residentInfoImg}>
                <img src={image} alt={name}  />
            </div>
            <div className={styles.residentInfoContent}>
                <p> <strong>Name:</strong> {name}</p>
                <p> <strong>Status:</strong> {status}</p>
                <p> <strong>Origin:</strong> {origin}</p>
                <p> <strong># Episodes:</strong> {episode}</p>
            </div>  
        </div>
    )
}
