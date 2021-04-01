import ProgramButton from "./ProgramButton"
import { displayDate } from './littleHelpers/helperFunctions'
import { Button } from 'react-bootstrap'
import React from 'react'

class UserProgramsList extends React.Component {

    state = {
        search: ""
    }

    handleOnChange = event => {
        this.setState({
            search: event.target.value
        })
    }

    filterUserPrograms(){
       if (this.state.search === ""){
           return this.props.userPrograms
       }else{
           return this.props.userPrograms.filter(p => p.username.toLowerCase().includes(this.state.search.toLowerCase()))
       }

    }

    render(){
        return (
            <div className="formDiv">
                <form onSubmit={this.handleOnSubmit}>
                    <input onChange={this.handleOnChange} type="text" placeholder="Filter by Username" className="mr-sm-2" />
                </form>
                <hr></hr>
                <h2>Custom Programs</h2>
                <hr></hr>
                {this.filterUserPrograms().map(program => {
                return (
                    < >
                    <ProgramButton key={`userPrograms-${program.id}`} program={program} url={this.props.url} buttonText={`${program.username} is racing on -- ${displayDate(program.race_date)}`}/>
                    </>
                )
                })}
        
            </div>
        )}
}

export default UserProgramsList