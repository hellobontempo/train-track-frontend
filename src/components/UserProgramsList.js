import ProgramButton from "./ProgramButton";
import { displayDate } from "./utils/helperFunctions";

const UserProgramsList = (props) => {
  return (
    <div className="formDiv">
      <h2>Custom Programs</h2>
      <hr></hr>
      {props.userPrograms.map((program) => {
        return (
          <>
            <ProgramButton
              key={`user-programs-${program.username}`}
              program={program}
              url={props.url}
              buttonText={`${program.username} is racing on -- ${displayDate(
                program.race_date
              )}`}
            />
          </>
        );
      })}
    </div>
  );
};

export default UserProgramsList;
