import React, {useState} from 'react'
import HomePage from '../src/components/HomePage.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  //Initial hardcoded set of users.
  const [users, setUsers] = useState(["shreya@rediff.com", "TJ@gmail.com", "Danny@yahoo.com"])
    
  return (
    <Router>
      <Routes>
       <Route path="/" element={<HomePage users={users} setUsers={setUsers}/>} />
      </Routes>
    </Router>
  );
}

export default App;
