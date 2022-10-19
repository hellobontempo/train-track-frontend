import { Button, Modal, Nav } from "react-bootstrap";
import React from "react";

class PopupModal extends React.Component {
  state = {
    show: true,
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
        <Modal show={this.state.show} onHide={this.hideModal} animation={true}>
          <Modal.Header>
            <Modal.Title>Your Program Has Been Created!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center>
              <Nav.Link href="/user_programs">
                View Custom Training Programs
              </Nav.Link>
            </center>
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

export default PopupModal;
