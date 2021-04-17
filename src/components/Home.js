import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = (props) => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <img src="/images/logo-train-track.png" alt="logo" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
