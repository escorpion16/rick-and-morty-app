import imgLogo from '../images/Rick_and_Morty_logo.png';
import styles  from './SearchBox.module.css';

export const SearchBox = ({data, handleSelect }) => {

    
    const list = data.map(value => <option value={value.name} key={value.id}> {value.name} </option>)
    return (
        <div className={styles.searchBoxContainer }>

            <img src={imgLogo} alt='rickAndMorty'/>

            <select onChange={(e) => handleSelect(e.target.value)}>
                <option value=''>Select...</option>
                { list }
            </select>

        </div>
    )
}
