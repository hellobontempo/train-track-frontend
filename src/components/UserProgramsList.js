import { Button, ButtonGroup } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserProgramsList = props => {
    console.log(props)
    return (
        <div className="formDiv">
        <h2>Custom Programs</h2><hr></hr>
        {props.userPrograms.map(program => {
            return (
                <div className="formDiv">
                <ButtonGroup vertical>
                    <Button variant="dark"><Link key={program.id} to={`/user_programs/${program.id}`} > Race Date: {program.race_date} | Created by: {program.username} </Link></Button>
                </ButtonGroup>
                </div>
            )
        })}
    
    </div>
    )
}

export default UserProgramsList