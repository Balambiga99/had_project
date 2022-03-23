import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Granted_consents from './Granted_consents';
import FlavorForm from './Request_consent';
import Consented_records from './Consented_records';
import axios from 'axios';
import ReactTable from "react-table"; 
import 'react-table/react-table.css'


function App() {
  return (
    <div className="App">
      <Granted_consents />
      {/* <Consented_records/> */}
      
    </div>
  );
}

export default App;
