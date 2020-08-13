import React from 'react';
import './App.css';
import contacts from './contacts.json';
import Table from './components/Table';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5),
    };
  }
  render() {
    return (
      <div className="IronContacts">
        <h1>IronContacts</h1>
        <Table contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
