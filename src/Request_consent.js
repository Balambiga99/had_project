import React, { Component } from 'react'
import { useState } from "react";
import ReactDOM from "react-dom";
import './form.css';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [accessPurpose, setAccessPurpose] = useState("General Health");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <div class="formContainer">
    <form onSubmit={handleSubmit}>
      <label>Patient Name:
      <input 
        type="text" 
        name="patient_name" 
        value={inputs.patient_name || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      <label>Patient ID:
        <input 
          type="text" 
          name="patient_id" 
          value={inputs.patient_id || ""} 
          onChange={handleChange}
        />
        </label>
        <br/>
        <label>Request information:
      <input 
        type="text" 
        name="request_info" 
        value={inputs.request_info || ""} 
        onChange={handleChange}
      />
      </label>
      <br/>
      {/* <label>Access Purpose:
      <input 
        type="text" 
        name="access_purpose" 
        value={inputs.access_purpose || ""} 
        onChange={handleChange}
      />
      </label> */}
      <label>Access Pupose:
      <select value={accessPurpose} onChange={handleChange}>
        <option value="Surgery">Surgery</option>
        <option value="General Health">General Health</option>
        <option value="Heart Disease">Heart Disease</option>
      </select>
      </label>
      <input type="submit" />
    </form>
    </div>
  )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));
// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
export default MyForm;