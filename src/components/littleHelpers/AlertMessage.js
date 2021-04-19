// import React, { useState } from 'react'
import { Alert } from "react-bootstrap";

export default function AlertMessage (props) {
    // const [show, setShow] = useState(true);
    console.log("props", props)
    return (
        <Alert variant={props.variant}>
          {props.message}
        </Alert>
    )
}
