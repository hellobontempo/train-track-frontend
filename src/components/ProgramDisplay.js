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
        {program ? renderProgram() : <h1>Loading...</h1>}
        </>
    )
}

export default ProgramDisplay