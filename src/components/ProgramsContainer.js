import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import ProgramsList from "./ProgramsList"
import ProgramTable from "./ProgramTable"

const ProgramsContainer = (props) => {

    return(
        <div>
            <Switch>
                <Route exact path="/programs/:id" component={({match}) =>  <ProgramTable program={props.programs.find(program => program.id == parseInt(match.params.id))}/>}/>
                <Route exact path="/programs" component={() =>  <ProgramsList programs={props.programs}/>}/>
            
            </Switch>
        </div>
    )
}

export default ProgramsContainer