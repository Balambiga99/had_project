import React, { Component } from "react";

const hospitals = ['Apollo','Fortis','Kauvery'];
class Demo1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  

  render() {
    return <div>
      {hospitals.map((hospital)=>(
         <ul><li>{hospital} </li></ul>
      ))}
    </div>;
  }
}

export default Demo1;