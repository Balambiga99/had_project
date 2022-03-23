import {useState} from 'react';
import React, { Component } from 'react'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
//import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
import ReactTable from "react-table"; 
import 'react-table/react-table.css'

export default class Granted_consents extends Component {
    constructor(props){
      super(props)
      this.state = {
        users: [],
        loading:true
      }
    }
    async getUsersData(){
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(res.data)
      this.setState({loading:false, users: res.data})
    }
    componentDidMount(){
      this.getUsersData()
    }
    render() {
      const columns = [{  
        Header: 'Patient ID',  
        accessor: 'id',
       }
       ,{  
        Header: 'Patient Name',  
        accessor: 'name' ,
        }
       
       ,{  
       Header: 'Consent Purpose',  
       accessor: 'username' ,
       }
       ,{  
       Header: 'View',  
       accessor: 'phone',
       },
       {  
        Header: 'Delegate Consent',  
        accessor: 'email',
        },
        {  
          Header: 'Website',  
          accessor: 'website',
          }
    ]
      return (
        <ReactTable  
        data={this.state.users}  
        columns={columns}  
     />
      )
    }
  }

// const Granted_consents = () => {
//     const [granted_consents,setConsent] = useState([
//         {patient_id: 'PA001',patient_name: 'Ram', purpose: 'Heart Disease', doctor: 'mario', id: 1 },
//         { patient_id: 'PA002',patient_name: 'Shyam', purpose: 'Insomnia', doctor: 'yoshi', id: 2 },
//         { patient_id: 'PA003',patient_name: 'Meera', purpose: 'Diabetes', doctor: 'mario', id: 3 }

//     ]);
//     const columns = [{
//         dataField: 'id',
//         text: 'Patient ID'
//       }, {
//         dataField: 'name',
//         text: 'Patient Name'
//       }, {
//         dataField: 'purpose',
//         text: 'Purpose'
//       },{
//         dataField: 'View',
//         text: 'view'
//       },{
//         dataField: 'Delegate',
//         text: 'Delegate'
//       }];
//     return(
//         <div className = "Granted_consents">
//              <table>
                    

//                 {columns.map((header)=>(
//                    <th>{header.text}</th> 
                    
                     
                                       
//                 ))}
//                 {/* {granted_consents.map((consent) => (
//                     <div className='granted_consent-info' key = {consent.id}>
//                           <tr>
//                          <td id='patient_id'>{consent.patient_id}</td>
//                          <td id='patient_name'>{consent.patient_name}</td>
//                          <td id='purpose'> {consent.purpose}</td>
//                          <td id='view'><button>View Record</button></td>
//                          <td id='delegation'><button>Delegate consent</button></td>
//                         </tr>    
//                     </div>
//         ))}  */}
//          </table> 

//         </div> 
//     );
// }

// export default Granted_consents;