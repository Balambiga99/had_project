import React, { Component } from "react";
const episodes = ['Diabetes','Surgery','TMJ']
class Demo2 extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return <div>
      {episodes.map((episode)=>(
      <ul><li>{episode} </li></ul>
   ))}
   </div>;
  }
}

export default Demo2;