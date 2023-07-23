import HomePage from '../src/components/HomePage.js'
import Login from '../src/components/Login.js'
import SignUp from '../src/components/SignUp.js'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
