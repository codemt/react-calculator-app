import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  state = {

    num1 : '',
    num2 : ' ',
    result : ''
  }

  handleInputChange = (e) => {

      
   const name = e.target.name;
   const value = e.target.value;
   this.setState({

      [name]:value

   })
  

  }

  onSubmit = (e) => {

      e.preventDefault();
    const result = parseInt(this.state.num1) + parseInt(this.state.num2);
    this.setState({

       result : result

    })
    console.log(this.state)
    

  }
  render(){
    return (
      <div className="App">
        <input onChange={this.handleInputChange} name="num1" type="text" placeholder="enter number" />
        <input onChange={this.handleInputChange} name="num2" type="text" placholder="enter number" />
        <button onClick={this.onSubmit}> Add </button>
        <br /> <br /> <br />
        <span> {this.state.result} </span> 
      </div>
    );

  }

}

export default App;
