import { Button, ButtonGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'
import DisplayDate from "./DisplayDate"

const UserProgramsList = props => {
    console.log(props)
    

    return (
        <div className="formDiv">
        <h2>Custom Programs</h2>
        <hr></hr>
        {props.userPrograms.map(program => {
            return (
                < >
                <br></br>
                <Button className="block" variant="dark"><Link key={program.id} to={`/user_programs/${program.id}`}>Race Date: {DisplayDate(program.race_date)} &#10070; Created by: {program.username} </Link></Button>
                <br></br>
                </>
            )
        })}
    
    </div>
    )
}

export default UserProgramsList