import Button from "react-bootstrap/Button"

const ProgramButton = (props) => {
console.log(props.buttonText)
    return (
        <>
        <br></br>
            <Button  key={props.program.id} className="block" variant="dark" href={`${props.url}/${props.program.id}`}>{props.buttonText}</Button>
        <br></br>
        </>
    )
}

export default ProgramButton