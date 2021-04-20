import { Alert } from "react-bootstrap";

export default function AlertMessage (props) {
  console.log("message", props.message)
    return (
        <Alert variant={props.variant}>
          {props.message.map(m => {
            return <li>{m}</li>
          })}          
        </Alert>
    )
}
