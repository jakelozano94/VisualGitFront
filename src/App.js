import logo from './logo.svg';
import './App.css';
import 'd3-hierarchy'
import * as d3 from "d3"
import {useState, react} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'

const clientId = "16980cfa0456b2c465d9"
const authRoute = `https://github.com/login/oauth/authorize?scope=repo&client_id=${clientId}`
const repoList = ``


function App() {



 const repoList = () => {
   fetch('http://localhost:8000/repos/list')
   .then(res => res.json())
   .then(console.log)
   .catch(err => console.log(err))
 }

 const exampleRepo = () => {
  // list a specific repo given from the back end
   fetch('http://localhost:8000/repos/example')
   .then(res => res.json())
   .then(console.log)
   .catch(console.log)
 }

 const listCommits = () => {
   // List comments from a repo of choice
   fetch('http://localhost:8000/repos/commits')
   .then(res => res.json())
   .then(console.log)
   .catch(console.log)
 }

 const listBranches = () => {
   //pseudo code for listing all branches
   fetch('http://localhost:8000/repos/branches')
   .then(res => res.json())
   .then(console.log)
   .catch(console.log)
 }

  return (
      <div className="hello">
        <a href={authRoute}>auth</a>
        <button onClick={listCommits}>List Example Commits</button>
        <button onClick={exampleRepo}>Example Repo</button>
        <button onClick={repoList}>List Repos</button>
      </div>
  );
}

export default App;
