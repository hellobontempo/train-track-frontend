import ProgramButton from "./ProgramButton"
import { displayDate } from './littleHelpers/helperFunctions'

const UserProgramsList = props => {

    return (
        <div className="formDiv">
            <h2>Custom Programs</h2>
            <hr></hr>
            {props.userPrograms.map(program => {
                console.log(program.race_date)
            return (
                < >
                 <ProgramButton key={`userPrograms-${program.id}`} program={program} url={props.url} buttonText={`${program.username} is racing on -- ${displayDate(program.race_date)}`}/>
                </>
            )
            })}
    
        </div>
    )
}

export default UserProgramsList