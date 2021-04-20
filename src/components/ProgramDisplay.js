import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ProgramDisplay = ({program}) => {

    function renderProgram(){
        return (
            <>
            <br></br>
                <h2>{program.title}</h2>
                <hr></hr>
                <h3>Total Miles: {program.race_mileage}</h3>
                <p>Recommended Run Routine: </p>         
                {program.description.split("-").map( e => <p>{e}</p>)}         
            </>
        )
    }
    return(
        <>
        {program ? renderProgram() : <Loader type="TailSpin" color="#FD8A61" height={50} width={50} />}
        </>
    )
}

export default ProgramDisplay