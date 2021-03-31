import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import ProgramsList from "../ProgramsList"

const ProgramsContainer = (props) => {
console.log("programs container", props)
    return(
        <div>
            <Switch>
                {/* <Route exact path="/programs/:id" component={({match}) =>  <ProgramTable program={props.programs.find(program => program.id === parseInt(match.params.id))}/>}/> */}
                <Route exact path="/programs" component={({match}) =>  <ProgramsList programs={props.programs} url={match.url}/>}/>
               
            </Switch>
        </div>
    )
}

export default ProgramsContainer