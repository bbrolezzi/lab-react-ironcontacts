import React from 'react';
import Contacts from './Contacts';
const Table = (props) => {
  return (
    <table>
      <tbody>
        {props.contacts.map((contact) => {
          return (
            <Contacts
              key={contact.id}
              pictureUrl={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
