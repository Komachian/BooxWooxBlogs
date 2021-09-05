import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Global/nav";
import Footer from './components/Global/Footer'
import Home from "./components/Home/index";
import BlogsPage from "./components/pages/blogs";
import Blog from "./components/pages/blog";
import { AuthProvider } from "./components/Global/AuthContext";
import { UserProvider } from "./components/Global/UserContext";



function App() {
  return (
    <Router>
      <Navbar id="nav" />
      <Switch>
      <UserProvider>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/blogs" component={BlogsPage} />
        <Route path="/blog" component={Blog} />
        </AuthProvider>
      </UserProvider>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
