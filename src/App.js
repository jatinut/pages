import React, { Component } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//https://github.com/suthon-coe/pages

const students = [
  {id: '12', name: 'New', score: 23},
  {id: '18', name: 'Bob', score: 27},
  {id: '20', name: 'bank', score: 22}
]

const Home = () => (<div>Home
  <li><Link to="/students">list of students</Link></li>
</div>)

const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
    <li><Link to="/">back to home</Link></li>
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
  <div>{id} {name} = {score}</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        </div>       
      </Router>
    );
  }
}

export default App;