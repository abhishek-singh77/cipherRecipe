import Navbar from "./Components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route path="/register" element={ currentUser ? <Homepage  /> : <Register />} />
        <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
        <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
        <Route path="/write" element={currentUser ? <Write /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
      </Routes>
{/*       <Routes>
        <Route exact path="/" element={<Homepage />}>
          <Homepage />
        </Route>
        <Route path="/posts" element={<Homepage />}>
          <Homepage />
        </Route>
        <Route path="/register" element={`<Homepage /> ,<Register />`}>
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Routes> */}
    </Router>
  );
}

export default App;