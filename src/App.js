import './App.css';
import React from 'react'
import { connect } from 'react-redux';
import {fetchExercises, fetchPrograms, fetchUserPrograms} from './actions/actions'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './components/navigation/Home'
import ProgramsContainer from './components/containers/ProgramsContainer';
import CustomProgramsContainer from './components/containers/CustomProgramsContainer';
import Signup from './components/navigation/Signup';

import NavBar from './components/navigation/NavBar';
import Switch from 'react-bootstrap/esm/Switch';

import ProgramForm from './components/ProgramForm';
import GreyBlock from './components/littleHelpers/GreyBlock';
import AlertMessage from './components/littleHelpers/AlertMessage';
import Login from './components/navigation/Login';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPrograms()
    this.props.fetchUserPrograms()
    this.props.fetchExercises()
  }
  
  render(){
    const { alert } = this.props
    return (
      <div className="App" style={{ background: "#8F9AAF" }}>
          <NavBar loggedIn={this.props.loggedIn}/>
          { this.props.alert.message !== "" ? <AlertMessage message={alert.message} variant={alert.variant}/> : ""}
          <Router> 
            <Switch>
              <Route exact path="/" component={Home} />  
              <Route exact path="/signup">
                <Signup/>  
              </Route> 
              <Route exact path="/login">
                <Login/>
              </Route> 
              <Route path="/programs" component={ () => {
              return <ProgramsContainer programs={this.props.programs}/>
              }} /> 
              <Route path="/user_programs" component={ () => {
              return <CustomProgramsContainer userPrograms={this.props.userPrograms}/>
              }} /> 
            
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
    loadingUP: state.loadingUP,
    alert: state.alert,
    loggedIn: state.loggedIn

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
