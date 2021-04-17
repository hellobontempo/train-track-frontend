import { Button, Modal } from "react-bootstrap";
import React from "react";
import ProgramDisplay from "./ProgramDisplay";

class RunDescriptionModal extends React.Component {
  state = {
    show: false,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Button variant="dark" onClick={this.showModal}>
          Training Program Tips
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.hideModal}
          animation={false}
          closeButton
        >
          <Modal.Header>
            <Modal.Title>Training Tips</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ProgramDisplay program={this.props.program} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.hideModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RunDescriptionModal;
