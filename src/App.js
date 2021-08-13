// import logo from './logo.svg'
import Navbar from './components/Global/nav'
import './App.css'
import Home from './components/Home/index'
import BlogsPage from './components/pages/blogs'
import Footer from './components/Global/Footer'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import NewBlog from './components/pages/CreateBlog/NewBlog'
import BasicRoute from './components/Routes/BasicRoute'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <BasicRoute path='/' exact component={Home} />
        <BasicRoute path='/blogs' component={BlogsPage} />
        <BasicRoute path='/create-blog' component={NewBlog} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
