import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Global/nav'
import Footer from './components/Global/Footer'
import Home from './components/Home/index'
import BlogsPage from './components/pages/blogs'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs' component={BlogsPage} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
