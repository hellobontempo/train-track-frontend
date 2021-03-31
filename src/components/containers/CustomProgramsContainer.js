import Switch from "react-bootstrap/esm/Switch"
import { Route } from "react-router"
import UserProgramsList from "../UserProgramsList"
import CustomProgramTable from "../CustomProgramTable"


const CustomProgramsContainer = (props) => {

console.log("programs container", props)
    return(
        <div>
            <Switch>
                <Route exact path="/user_programs" component={({match}) =>  <UserProgramsList userPrograms={props.userPrograms} url={match.url}/>}/>
                <Route exact path="/user_programs/:id" component={({match}) =>  <CustomProgramTable userProgram={props.userPrograms.find(userProgram => userProgram.id === parseInt(match.params.id))}/>}/>
            </Switch>
        </div>
    )
}

export default CustomProgramsContainer