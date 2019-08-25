import React from 'react';
import Users from './components/Users';
import { connect } from 'react-redux';
import './App.css';

function App(props) {

  return (
      <div id="App" className={props.background === true ? "" : "white"}>
        <Users />
      </div>
  );
}

//   Change State from rootReducer and reducer to props
const mapStateToProps = state => ({
  background: state.users.background,
});


export default connect(mapStateToProps)(App);
