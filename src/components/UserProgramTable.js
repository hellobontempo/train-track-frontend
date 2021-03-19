import React, { Fragment } from 'react'
import ProgramTable from './ProgramTable';


const UserTable = (props) => {
  console.log(props)
  return (
    <Fragment>
     { props.userProgram ? <div>we got props!</div> : <div>nope..</div>}
    </Fragment>
    )
}



export default UserTable