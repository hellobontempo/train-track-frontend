import ProgramButton from "./ProgramButton";

const ProgramsList = (props) => {
  return (
    <div className="formDiv">
      <h2>Training Programs</h2>
      <hr></hr>
      {props.programs.map((program) => {
        return (
          <>
            <ProgramButton
              key={`programs-${program.id}`}
              program={program}
              url={props.url}
              buttonText={program.title}
            />
          </>
        );
      })}
    </div>
  );
};

export default ProgramsList;
