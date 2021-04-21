import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function AlertMessage (props) {

  function renderMessage(){
    return (
      props.message.length === 1 ? <ul>{props.message}</ul> : props.message.map(m => <li>{m}</li>)
    )
  }
    return (
        <Alert variant={props.variant}>
          {props.loading ? <Loader type="TailSpin" color="#FD8A61" height={50} width={50} /> : renderMessage()}          
        </Alert>
    )
}

export default connect( state => ({ loading: state.loadingLogIn }) )(AlertMessage)
