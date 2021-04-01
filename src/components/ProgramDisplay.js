import { Container } from "react-bootstrap"

const ProgramDisplay = (props) => {
    console.log(props)

   
    return(

        <div className="formDiv">
            <h2>{props.program.title}</h2>
            <hr></hr>
            <p>Total Miles: {props.program.race_mileage}</p>
        </div>
    )
}

export default ProgramDisplay