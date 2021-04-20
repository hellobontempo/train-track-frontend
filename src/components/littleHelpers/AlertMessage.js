import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function AlertMessage (props) {
  console.log(props.loading)
  console.log("message", props.message)
    return (
        <Alert variant={props.variant}>
          {props.loading ? <Loader type="TailSpin" color="#FD8A61" height={50} width={50} /> : props.message.map(m => {
            return <li>{m}</li>
          })}          
        </Alert>
    )
}

export default connect( state => ({ loading: state.loadingLogIn }) )(AlertMessage)
