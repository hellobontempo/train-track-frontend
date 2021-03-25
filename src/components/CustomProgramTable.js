import React from 'react'
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import DisplayDate from './littleHelpers/DisplayDate'
import CustomTable from './table/CustomTable';

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
        <h1>{this.props.userProgram.username}'s Schedule:</h1>
        <h4>start date: {DisplayDate(this.props.userProgram.start_date)}</h4>
         <CustomTable program={this.props.userProgram}/>
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

export default connect(mapStateToProps)(CustomProgramTable)