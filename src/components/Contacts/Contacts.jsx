import React from 'react';
// import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
// import PropTypes from 'prop-types';
import { ContactsContainer } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { dd, getContactsArray } from 'redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const ContactsArray = useSelector(getContactsArray);
  const filterValue = useSelector(state => state.filter.value);

  const filteredContacts = () => {
    if (filterValue.toLowerCase() === '') return ContactsArray;
    return ContactsArray.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };


  return (
    <ContactsContainer>
      {filteredContacts()?.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} : {contact.number}
            <button type="button" onClick={() => dispatch(dd(contact.id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsContainer>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       number: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteClick: PropTypes.func.isRequired,
// };

export default ContactList;
