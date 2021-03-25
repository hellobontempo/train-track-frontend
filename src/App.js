import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {fetchExercises, fetchPrograms, fetchUserPrograms} from './actions/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home'
import ProgramsContainer from './components/containers/ProgramsContainer';
import NavBar from './components/NavBar';
import Switch from 'react-bootstrap/esm/Switch';
import ProgramForm from './components/ProgramForm';
import GreyBlock from './components/littleHelpers/GreyBlock';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPrograms()
    this.props.fetchUserPrograms()
  }

  render(){
    return (
      <div className="App" style={{ background: "#8F9AAF" }}>
          <NavBar />
          <Router> 
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route path="/programs" component={ () => {
              return this.props.loadingTP ? <h1>Loading...</h1> : <ProgramsContainer programs={this.props.programs}/>
              }} />  
              <Route path="/user_programs" component={ () => {
              return this.props.loadingUP ? <h1>Loading...</h1> : <ProgramsContainer userPrograms={this.props.userPrograms}/>
              }} />  
              <Route path="/exercises" component={Home}/>
              <Route path="/new-program" component={ProgramForm}/>
             </Switch>
          </Router>
          <GreyBlock/>
      </div>
    )}
}


const mapStateToProps = state => {
  return {
    programs: state.programs,
    userPrograms: state.userPrograms,
    exercises: state.exercises, //not using right now
    loadingTP: state.loadingTP,
    loadingUP: state.loadingUP

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPrograms: () => dispatch(fetchPrograms()),
    fetchUserPrograms: () => dispatch(fetchUserPrograms()),
    fetchExercises: () => dispatch(fetchExercises())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
