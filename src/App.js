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

  const d3Tree = (data) => {
    let root = d3.stratify
    let treemap = d3.treemap()
      .size(['100px', '100px'])
      .padding(2);

    let nodes = treemap(root
      .sum(function (data) { return data.sri }))
  }

  // const [authLink, setAuth] = useState()

 const repoList = () => {
   fetch('http://localhost:8000/repos/list')
   .then(res => res.json())
   .then(console.log)
   .catch(err => console.log(err))
 }

 const exampleRepo = () => {
   fetch('http://localhost:8000/repos/example')
   .then(res => res.json())
   .then(console.log)
   .catch(console.log)
 }

 const listCommits = () => {
   fetch('http://localhost:8000/repos/commits')
   .then(res => res.json())
   .then(d3Tree)
   .then(console.log)
   .catch(console.log)
 }

 const listBranches = () => {
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
