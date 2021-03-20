
import ProgramButton from "./ProgramButton"

const ProgramsList = props => {
 
    return (
        <div className="formDiv">
            <h2>Training Programs</h2><hr></hr>
            {props.programs.map(program => {
                return (
                    // <ButtonGroup vertical>
                    //     <Button variant="dark"><Link key={program.id} to={`/programs/${program.id}`} > {program.title} </Link></Button>
                        
                    // </ButtonGroup>
                    <>
                        <ProgramButton program={program} url={props.url} buttonText={program.title}/>
                    </>
                )
            })}
        
        </div>
    )
}


export default ProgramsList