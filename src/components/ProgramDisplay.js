const ProgramDisplay = ({program}) => {

    function renderProgram(){
        return (
            <div className="formDiv">
                <h2>{program.title}</h2>
                <hr></hr>
                <p>Total Miles: {program.race_mileage}</p>           
                <p>Total Miles: {program.description}</p>           
            </div>
        )
    }
    return(
        <>
        {program ? renderProgram() : <h1>Loading...</h1>}
        </>
    )
}

export default ProgramDisplay