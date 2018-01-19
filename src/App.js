import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
 
const students =[
  {id: 12, name: 'New', score: 23},
  {id: 18, name: 'tin', score: 27},
  {id: 20, name: 'krit', score: 22}
]

const StudentLine = (prop) => (
  <div>{prop.id} {prop.name} = {prop.score}</div>
)
class App extends Component {
  render() {
    return (
     <div>
       {
        _.map(students, student => (<StudentLine {...student}/>))
        
       }
      </div> 
    );
  }
}

export default App;
