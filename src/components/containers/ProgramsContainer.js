import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import ProgramsList from "../ProgramsList"
import ProgramTable from "../table/ProgramTable"
import UserProgramTable from "../UserProgramTable"
import UserProgramsList from "../UserProgramsList"

const ProgramsContainer = (props) => {
console.log("programs container", props)
    return(
        <div>
            <Switch>
                <Route exact path="/programs/:id" component={({match}) =>  <ProgramTable program={props.programs.find(program => program.id === parseInt(match.params.id))}/>}/>
                <Route exact path="/user_programs/:id" component={({match}) => <UserProgramTable userProgram={props.userPrograms.find(userProgram => userProgram.id === parseInt(match.params.id))}/>}/>
                <Route exact path="/programs" component={({match}) =>  <ProgramsList programs={props.programs} url={match.url}/>}/>
                <Route exact path="/user_programs" component={({match}) =>  <UserProgramsList userPrograms={props.userPrograms} url={match.url}/>}/>
            </Switch>
        </div>
    )
}

export default ProgramsContainer