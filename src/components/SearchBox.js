

export const SearchBox = ({data, handleSelect }) => {

    
    const list = data.map(value => <option value={value.name} key={value.id}> {value.name} </option>)
    return (
        <div>
            <select onChange={(e) => handleSelect(e.target.value)}>
                <option value=''>Select...</option>
                { list }
            </select>
        </div>
    )
}
