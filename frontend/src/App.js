import React from 'react';
import './App.css';
import Dashboard from './dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: props.user};
  }
  render() {
    let userName = this.state.user == null ? "akiros" : this.state.user;
    return (
      <div className='container'>
        <Dashboard />
      </div>
    ); 
  }
}

export default App;
