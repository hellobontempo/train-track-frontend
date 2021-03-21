import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import UserProgramTable from "../UserProgramTable"
import UserProgramsList from "../UserProgramsList"


const CustomProgramsContainer = (props) => {

console.log("programs container", props)
    return(
        <div>
            <Switch>
                <Route exact path="/user_programs/:id" component={({match}) => <UserProgramTable userProgram={props.userPrograms.find(userProgram => userProgram.id === parseInt(match.params.id))}/>}/>
                <Route exact path="/user_programs" component={({match}) =>  <UserProgramsList userPrograms={props.userPrograms} url={match.url}/>}/>
            </Switch>
        </div>
    )
}

export default CustomProgramsContainer