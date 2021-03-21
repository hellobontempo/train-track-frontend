import ProgramButton from "./ProgramButton"
import DisplayDate from "./littleHelpers/DisplayDate"

const UserProgramsList = props => {

    return (
        <div className="formDiv">
            <h2>Custom Programs</h2>
            <hr></hr>
            {props.userPrograms.map(program => {
            return (
                < >
                 <ProgramButton key={`userPrograms-${program.id}`} program={program} url={props.url} buttonText={`Race Date: ${DisplayDate(program.race_date)} | Created by: ${program.username}` }/>
                </>
            )
            })}
    
        </div>
    )
}

export default UserProgramsList