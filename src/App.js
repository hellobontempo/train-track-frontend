import './App.css';
import Programs from './components/Programs';
import React from 'react'
import { connect } from 'react-redux';
import {fetchPrograms} from './actions/fetchPrograms'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home'
class App extends React.Component {

  componentDidMount() {
    this.props.fetchPrograms()
  }

  render(){
    return (
      <div className="App">
          <NavBar />
          <Router>
             <Route exact path="/" component={Home} />  
             <Route exact path="/programs" component={Programs} />  
          </Router>
      </div>
    )}
}


const mapStateToProps = state => {
  return {
    programs: state.programs,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrograms: () => dispatch(fetchPrograms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
