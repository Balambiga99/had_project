import {useState} from 'react';
import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";

class Consented_records extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showHideDemo1: false,
      showHideDemo2: false,
      showHideDemo3: false
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showHideDemo1":
        this.setState({ showHideDemo1: !this.state.showHideDemo1 });
        break;
      case "showHideDemo2":
        this.setState({ showHideDemo2: !this.state.showHideDemo2 });
        break;
      case "showHideDemo3":
        this.setState({ showHideDemo3: !this.state.showHideDemo3 });
        break;
    //   default:
    //     null;
    }
  }

  render() {
    const { showHideDemo1, showHideDemo2, showHideDemo3 } = this.state;
    return (
      <div>
        {showHideDemo1 && <Demo1 />}
        <hr />
        {showHideDemo2 && <Demo2 />}
        <hr />
        {showHideDemo3 && <Demo3 />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showHideDemo1")}>
            Click to hide Hospital component
          </button>
          <button onClick={() => this.hideComponent("showHideDemo2")}>
            Click to hide Episodes component
          </button>
          <button onClick={() => this.hideComponent("showHideDemo3")}>
            Click to hide Records component
          </button>
        </div>
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));
// const Consented_records = () => {
//     const [granted_consents,setConsent] = useState([
//         {patient_name: 'Ram', purpose: 'Heart Disease', author: 'mario', id: 1 },
//         { patient_name: 'Shyam', purpose: 'Insomnia', author: 'yoshi', id: 2 },
//         { patient_name: 'Meera', purpose: 'Diabetes', author: 'mario', id: 3 }

//     ]);
//     return(
//         <div className = "Granted_consents">
//             {granted_consents.map((consent) => (
//                 <div className='granted_consent-info' key = {consent.id}>
//                     <table>
//                         <tr>
//                             <td>&nbsp;</td>
//                             <td>Knocky</td>
//                             <td>Flor</td>
//                             <td>Ella</td>
//                             <td>Juan</td>
//                         </tr>
//                     </table>
//                 </div>
//         ))}

//         </div>
//     );
// }

export default Consented_records;