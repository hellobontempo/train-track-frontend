import Container from "react-bootstrap/container"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"

const Home = props => {

    return (
        <div>
            <Container fluid >
                <Row>
                    <Col><img src="/images/logo-train-track.png" alt="logo"/></Col>
                </Row>
            </Container>
        </div>


    )
}

export default Home