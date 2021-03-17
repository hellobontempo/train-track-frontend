import { Program } from "./Program"

const Programs = (props) => {
    
    return (
        <div>
            {props.programs.map(program => {
                return (
                    <Program key={program.id} program = {program}/>
                )
            })}
       
           
        </div>
    )
}

export default Programs