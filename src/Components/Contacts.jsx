import React from 'react';
function Contacts(props) {
  return (
    <tr>
      <td>
        <img src={props.pictureUrl} alt={props.name} />
      </td>
      <td>{props.name}</td>
      <td>{props.popularity}</td>
    </tr>
  );
}
export default Contacts;
