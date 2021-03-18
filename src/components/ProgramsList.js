import React from "react"
import { Button } from "react-bootstrap"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class ProgramsList extends React.Component {

    render(){
        return (
            <div>
                {this.props.programs.map(program => {
                    return (
                        <div>
                        <Button variant="dark"><Link key={program.id} to={`/programs/${program.id}`} > {program.title} </Link></Button>
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