import logo from './logo.svg';
import './App.css';
import {Program} from './components/Program';
import React from 'react'
import { connect } from 'react-redux';
import {fetchPrograms} from './actions/fetchPrograms'

class App extends React.Component {

  componentDidMount() {
    console.log(this.props)
    this.props.fetchPrograms()
  }

  render(){
    return (
      <div className="App">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <Program/>
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
