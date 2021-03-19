import React from "react"
import { Button, ButtonGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'

class ProgramsList extends React.Component {

    render(){
        return (
            <div className="formDiv">
                <h2>Training Programs</h2><hr></hr>
                {this.props.programs.map(program => {
                    return (
                        <ButtonGroup vertical>
                            <Button variant="dark"><Link key={program.id} to={`/programs/${program.id}`} > {program.title} </Link></Button>
                        </ButtonGroup>
                    )
                })}
            
            </div>
        )
    }
}


export default ProgramsList