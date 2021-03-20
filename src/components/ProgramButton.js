import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const ProgramButton = (props) => {

    return (
        <>
        <br></br>
            <Button className="block" variant="dark"><Link key={props.program.id} to={`${props.url}/${props.program.id}`}>{props.buttonText}</Link></Button>
        <br></br>
        </>
    )
}

export default ProgramButton