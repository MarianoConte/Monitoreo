import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./components/auth/Login";
import Monitoreo from "./components/monitoreo/Monitoreo";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/monitoreo" element={<Monitoreo />} />
      </Routes>
    </Router>
  );
}

export default App;
