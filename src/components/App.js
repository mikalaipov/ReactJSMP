import React, {Component} from 'react';
import {Fragment} from 'react';


  export class ReactCreateElement extends Component{
    render() {
      return (
        React.createElement(
          "h1", 
          {}, 
          "1. Hello World"
        )
      )
    }
  }
  
  export class ReactComponent extends Component {
     render() {
      return (
        <div>
          <h1>2. Hello World</h1>
        </div>
      );
    }
  }
  
  export class ReactPureComponent extends React.PureComponent {
    render() {
      return <h1>3. Hello World</h1>;
    }
  } 
  
  export function ReactFunctionalComponents() {
    return <h1>4. Hello World</h1>;
  }
  
  export const myElement = (   
    <Fragment>  
        <ReactCreateElement />
        <ReactComponent />
        <ReactPureComponent />
        <ReactFunctionalComponents />
    </Fragment> 
  ); 

  export default function result() {
    return (myElement ? true : false)
  }