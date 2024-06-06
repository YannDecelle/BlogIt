import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import ProfilePage from "./Pages/Profile";
import Post from "./Pages/Post";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blogpost" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
