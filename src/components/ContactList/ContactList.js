import { ContactListItem } from "components/ContactListItem/ContactListItem"


export const ContactList = ({ items, onDelete }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <ContactListItem person={item} id={item.id} onDelete={onDelete}></ContactListItem>
                </li>
            ))}
        </ul>
    )
}