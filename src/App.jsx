// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
// import Register from "./components/Register";
// import Reset from "./components/Reset";
import Dashboard from "./components/dash/dash";
import Homee from "./components/homee";
import SignIn from "./components/Login";

// Admin routing
import AdminReport from "./components/dash/adminreport";
import AdminMinutes from "./components/dash/adminminutes";
import Adminexe from "./components/dash/adminexe";

//Student routing
import StuDash from "./components/studentdash/exedash";
import StuAddEvent from "./components/studentdash/exeAddEvent";
import StuAddReport from "./components/studentdash/exeReport";
import StuAddMinutes from "./components/studentdash/exeAddMinutes";



function App() {
  return (
    <div >
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Homee />} />
          <Route exact path="/login" element={<SignIn />} />
          {/* <Route exact path="/register" element={<Register />} /> */}
          {/* <Route exact path="/reset" element={<Reset />} /> */}
          <Route exact path="/dashboard" element={<Dashboard />} />
          {/* <Route exact path="/admindash" element={<Dash />} /> */}
          <Route exact path="/adminreport" element={<AdminReport />} />
          <Route exact path="/adminminutes" element={<AdminMinutes />} />
          <Route exact path="/adminexe" element={<Adminexe />} />

          {/* Student Routing */}
          <Route exact path="/exedash" element={<StuDash/>} />
          <Route exact path="/exeAddEvent" element={<StuAddEvent/>} />
          <Route exact path="/exeReport" element={<StuAddReport/>} />
          <Route exact path="/exeAddMinutes" element={<StuAddMinutes/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;