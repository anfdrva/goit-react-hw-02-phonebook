export const Filter = ({onChange, value}) => {
    return (
            <label> Find contacts by name
                <input type="text" value={value} onChange={onChange}/>
            </label>
    )
}