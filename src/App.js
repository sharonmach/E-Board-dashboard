import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebarr from "./components/sidebar2/Sidebarr";
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import "./app.css";
import UserList from "./pages/userList/UserList";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import User from "./pages/user/User";
import Document from "./pages/document/Document";
import NewUser from "./pages/newUser/NewUser";
import Calendar from "./pages/calendar/Calendar";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import Chat from "./pages/chat/Chat";
import Prod from "./pages/product/Prod";
import Meeting from "./pages/meeting/Meeting";
import Meetings from "./pages/meetings/Meetings";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebarr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/document" element={<Document />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/products" element={<Prod />} />
          <Route path="/meeting-types" element={<Meeting />} />
          <Route path="/meetings" element={<Meetings />} />
        </Routes>

        {/* <div className="others">other pages</div> */}
      </div>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
