export const ContactListItem = ({person}) => {
    return (
        <div>
            <p>{person.name}</p>
            <p>{person.number}</p>
        </div>
    )
}