import './App.css';
import Programs from './components/Programs';
import React from 'react'
import { connect } from 'react-redux';
import {fetchPrograms} from './actions/fetchPrograms'
import NavBar from './components/NavBar';


class App extends React.Component {

  componentDidMount() {
    this.props.fetchPrograms()
  }

  render(){
    return (
      <div className="App">
          <NavBar />
          <Programs programs={this.props.programs}/>
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
