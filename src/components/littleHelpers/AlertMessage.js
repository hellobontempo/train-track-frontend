import { Alert } from "react-bootstrap";
// import { useState } from "react";
import { connect } from "react-redux";

function AlertMessage (props) {
  console.log(props.loading)
  console.log("message", props.message)
    return (
        <Alert variant={props.variant}>
          {props.loading ? "Loading" : props.message.map(m => {
            return <li>{m}</li>
          })}          
        </Alert>
    )
}

export default connect( state => ({ loading: state.loadingLogIn }) )(AlertMessage)
