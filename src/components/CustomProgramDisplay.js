import React from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import RunDescriptionModal from "./RunDescriptionModal";
import CustomTable from "./table/CustomTable";

class CustomProgramDisplay extends React.Component {
  findProgram() {
    const userProgramId = this.props.userProgram.program_id;
    const program = this.props.programs.find((p) => p.id === userProgramId);
    return program;
  }

  displayTable() {
    const { userProgram } = this.props;
    return (
      <DocumentTitle title={`${userProgram.username} Custom Training`}>
        <br></br>
        <h1>{userProgram.username}'s Schedule:</h1>
        <br></br>
        <RunDescriptionModal program={this.findProgram()} />
        <br></br>
        <br></br>
        <h6>
          <i>Click any workout to edit</i>
        </h6>
        <br></br>
        <CustomTable program={userProgram} />
      </DocumentTitle>
    );
  }
  render() {
    return (
      <Container>
        {this.props.userProgram ? this.displayTable() : <h1>Loading...</h1>}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs,
  };
};

export default connect(mapStateToProps)(CustomProgramDisplay);
