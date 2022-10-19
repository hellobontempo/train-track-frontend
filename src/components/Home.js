import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src="/images/logo-train-track.png" alt="logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
