import { BrowserRouter, Route, Routes } from "react-router-dom";
import {UserAvatar} from "./components/organisms/UserAvatar"
import {
  Home,
  Historical,
  Login,
  LeaderBoard,
  Profile,
  Register,
  Information,
} from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historical" element={<Historical />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/information" element={<Information />} />
          <Route path="/testing-useravatar" element={<UserAvatar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
