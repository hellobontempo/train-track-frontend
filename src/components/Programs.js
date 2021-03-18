import React from "react"
import { connect } from "react-redux"
import ProgramTable from "./ProgramTable"
import { Link } from 'react-router-dom';

class Programs extends React.Component {
    
    renderPrograms = () =>{
        const programList = Object.keys(this.props.programs).map(programID => 
            <Link key={programID} to={`/programs/${programID}`}>{this.props.programs[programID].title}</Link>
          )
        return programList
       
    }

    render(){
        return (
            <div>
                {this.props.programs.map(program => {
                    return (
                        <ProgramTable program = {program}/>
                    )
                })}
                {this.renderPrograms()}
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
      programs: state.programs
    
    }
  }

export default connect(mapStateToProps)(Programs)