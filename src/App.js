import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Global/nav'
import Footer from './components/Global/Footer'
import Home from './components/Home/index'
import BlogsPage from './components/pages/blogs'
import NewBlog from './components/pages/CreateBlog/NewBlog'
import Blog from './components/pages/blog'
import { UserProvider } from './components/Contexts/UserContext'
import { AuthProvider } from './components/Contexts/AuthContext'
import PrivateRoute from './components/Routes/PrivateRoute'

function App() {
    return (
        <>
            <Router>
            <UserProvider>
                <AuthProvider>
                <Navbar />
                <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/blogs' component={BlogsPage} />
                            <PrivateRoute path='/create-blog' component={NewBlog} />
                            <Route path='/blog' component={Blog} />
                </Switch>
                <Footer />
                </AuthProvider>
                </UserProvider>
            </Router>
        </>
    )
}

export default App
