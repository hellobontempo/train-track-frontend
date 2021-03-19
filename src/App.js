import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {fetchPrograms, fetchUserPrograms} from './actions/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home'
import ProgramsContainer from './components/ProgramsContainer';
import NavBar from './components/NavBar';
import Switch from 'react-bootstrap/esm/Switch';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPrograms()
    this.props.fetchUserPrograms()
  }

  render(){
    return (
      <div className="App">
          <NavBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/programs" component={ () => {
              return this.props.loading ? <h1>Loading...</h1> : <ProgramsContainer programs={this.props.programs}/>
              }} />  
              <Route path="/user_programs" component={ () => {
              return this.props.loading ? <h1>Loading...</h1> : <ProgramsContainer userPrograms={this.props.userPrograms}/>
              }} />  
             </Switch>
          </Router>
      </div>
    )}
}


const mapStateToProps = state => {
  return {
    programs: state.programs,
    userPrograms: state.userPrograms,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrograms: () => dispatch(fetchPrograms()),
    fetchUserPrograms: () => dispatch(fetchUserPrograms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
