export const ContactListItem = ({person, id, onDelete}) => {
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.number}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}