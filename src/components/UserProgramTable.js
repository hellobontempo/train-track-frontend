import React from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import ProgramTable from './table/ProgramTable';

class UserTable extends React.Component {
  
  findProgram(){
    const userProgramId = this.props.userProgram.program_id
    const program = this.props.programs.find(p => p.id === userProgramId)
    return program
  }

  
  displayTable(){
    return (
      <div>
        <h1>{this.props.userProgram.username}'s Schedule:</h1>
        <h4>start date: {this.props.userProgram.start_date}</h4>
        <h4>race date: {this.props.userProgram.race_date}</h4>
         <ProgramTable custom={this.props.userProgram} program={this.findProgram()}/>
      </div>
    )
  }
  render(){
    console.log(this.props)
    return (
        <Container>
        {this.props.userProgram ? this.displayTable() : <h1>Loading...</h1>}
        </Container>
      )
  }
}


const mapStateToProps = state => {
  return {
    programs: state.programs
  }
}

export default connect(mapStateToProps)(UserTable)