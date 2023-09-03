import { ContactForm } from "./ContactForm/ContactForm";
import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";


export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerChange = event => {
    this.setState({filter: event.target.value});
    //console.log(event.target.value);
  };

  addContact = newContact => {
    console.log(newContact);
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }))
  };

  render() {

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))

    return(
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.handlerChange} value={this.state.filter}/>
        <ContactList items={visibleContacts} />
    </div>
  );
  }
};
