import ProgramForm from "./ProgramForm"
import Container from "react-bootstrap/container"
import Row from "react-bootstrap/row"
import Col from "react-bootstrap/col"

const Home = props => {

    return (
        <div className="component-background">
            {/* <Container fluid >
                <Row>
                    <Col><img src="/images/logo-train-track.png" alt="logo"/></Col>
                    <Col><ProgramForm/></Col>
                </Row>
            </Container> */}
            <img src="/images/logo-train-track.png" alt="logo"/>
        </div>


    )
}

export default Home