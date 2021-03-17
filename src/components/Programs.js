import React from "react"
import { connect } from "react-redux"
import ProgramTable from "./ProgramTable"

class Programs extends React.Component {
    
    handleOnClick = (program) =>{
        <ProgramTable key={program.id} program = {program}/>
    }
    render(){
        return (
            <div>
                {this.props.programs.map(program => {
                    return (
                        <ProgramTable key={program.id} program = {program}/>
                    )
                })}
        
            
            </div>
        )}
}

const mapStateToProps = (state) => {
    return {
      programs: state.programs
    
    }
  }

export default connect(mapStateToProps)(Programs)