import { Button, Col, Modal, Row } from 'react-bootstrap'
import React from 'react'
import { displayDate } from '../littleHelpers/helperFunctions'
import ProgramDisplay from './ProgramDisplay'

class RunDescriptionModal extends React.Component {

  state = {
    show: false,
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  render(){
    return(
      <>
      <Button variant="dark" onClick={this.showModal}>{this.props.program.title}</Button>
      <Modal show={this.state.show} onHide={this.hideModal} animation={false}> 
        <Modal.Header>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
            <Col>

            <ProgramDisplay program={this.props.program}/>
            </Col>
            <Col>
            </Col>
            </Row>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      </>
    )};



}

const mapStateToProps = ({exercises}) => {
  return {
      exercises}
}

export default connect(mapStateToProps, {editUserProgram})(RunDescriptionModal)