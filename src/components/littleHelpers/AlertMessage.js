import { Alert } from "react-bootstrap";
import { sentenceCase } from "sentence-case";

export default function AlertMessage (props) {
    return (
        <Alert variant={props.variant}>
          {sentenceCase(props.message)}
        </Alert>
    )
}
