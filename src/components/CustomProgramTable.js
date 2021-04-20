import React from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import RunDescriptionModal from './RunDescriptionModal';
import CustomTable from './table/CustomTable';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class CustomProgramTable extends React.Component {
  
  findProgram(){
    const userProgramId = this.props.userProgram.program_id
    const program = this.props.programs.find(p => p.id === userProgramId)
    return program
  }

  
  displayTable(){
    console.log(this.props)
    return (
      <div>
        <br></br>
        <h1>{this.props.userProgram.username}'s Schedule:</h1>
        <br></br>
        <RunDescriptionModal program={this.findProgram()}/>
        <br></br>
        <br></br>
        <CustomTable program={this.props.userProgram}/>
      </div>
    )
  }
  render(){
    const {userProgram, program} = this.props
    console.log(userProgram)
    console.log(program)
    return (
        <Container>
        {this.props.userProgram ? this.displayTable() : <Loader type="TailSpin" color="#FD8A61" height={50} width={50} />}
        </Container>
      )
  }
}


const mapStateToProps = state => {
  return {
    programs: state.programs
  }
}

export default connect(mapStateToProps)(CustomProgramTable)