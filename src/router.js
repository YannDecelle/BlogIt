import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home";
import ProfilePage from "./Pages/Profile";
import Post from "./Pages/Post";
import BlogPostForm from "./Pages/Post/new";
import LoginRegisterPage from "./Pages/Authentification";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blogpost" element={<Post />} />
        <Route path="/new" element={<BlogPostForm />} />
        <Route path="/auth" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
