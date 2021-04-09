const ProgramDisplay = ({program}) => {

    function renderProgram(){
        return (
            <div className="formDiv">
                <h2>{program.title}</h2>
                <hr></hr>
                <h3>Total Miles: {program.race_mileage}</h3>           
                {program.description.split("-").map( e => <p>{e}</p>)}         
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