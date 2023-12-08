import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CreateUser />} />
        <Route path="/userList" element={<UserList />} />
      </Routes>
    </div>
  );
}

export default App;

