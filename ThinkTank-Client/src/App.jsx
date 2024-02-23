import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import SignIn from "./Pages/SignIn";
import Search from "./Pages/Search";
import Signup from "./Pages/Signup";
import Projects from "./Pages/Projects";
import PostPage from "./Pages/PostPage";
import Dashboard from "./Pages/Dashboard";
import Header from "./Component/Header";
import FooterCom from "./Component/Footer";
import PrivateRoute from "./Component/PrivateRoute";
import CreatePost from "./Pages/CreatePost";
import OnlyAdminPrivateRoute from "./Component/OnlyAdminPrivateRoute"
import UpdatePost from "./Pages/UpdatePost"
// import Footer from "./Component/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
          </Route>

          <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>

        <Route path='/projects' element={<Projects />} />
        <Route path='/post/:postSlug' element={<PostPage />} />
      </Routes>
                  <FooterCom/> 
      </BrowserRouter>
    </div>
  );
}
