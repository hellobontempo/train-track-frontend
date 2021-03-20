import { Button } from "react-bootstrap"


const ProgramButton = (props) => {

    return (
        <>
        <br></br>
            {/* <Button className="block" variant="dark" href={}><Link key={props.program.id} to={`${props.url}/${props.program.id}`}>{props.buttonText}</Link></Button> */}
            <Button  key={props.program.id} className="block" variant="dark" href={`${props.url}/${props.program.id}`}>{props.buttonText}</Button>
        <br></br>
        </>
    )
}

export default ProgramButton