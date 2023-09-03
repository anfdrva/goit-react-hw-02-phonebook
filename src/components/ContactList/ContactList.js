import { ContactListItem } from "components/ContactListItem/ContactListItem"


export const ContactList = ({ items }) => {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    <ContactListItem person={item}></ContactListItem>
                </li>
            ))}
        </ul>
    )
}