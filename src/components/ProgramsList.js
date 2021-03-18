import React from "react"
import { connect } from "react-redux"
import ProgramTable from "./ProgramTable"
import { Route, Link } from 'react-router-dom'

class ProgramsList extends React.Component {

    render(){
        console.log(this.props)
        return (
            <div>
                
                {this.props.programs.map(program => {
                    return (
                        <div>
                        <Link key={program.id} to={`/programs/${program.id}`} > {program.title} </Link>
                        <ProgramTable program = {program}/>
                        </div>
                    )
                })}
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      programs: state.programs,
      userPrograms: state.userPrograms
    
    }
  }

export default connect(mapStateToProps)(ProgramsList)