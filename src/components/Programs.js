import { ProgramTable } from "./ProgramTable"

const Programs = (props) => {
    
    return (
        <div>
            {props.programs.map(program => {
                return (
                    <ProgramTable key={program.id} program = {program}/>
                )
            })}
       
           
        </div>
    )
}

export default Programs