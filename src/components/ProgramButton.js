import { Button } from "react-bootstrap";

const ProgramButton = (props) => {
  return (
    <>
      <br></br>
      <Button
        key={props.program.id}
        className="block"
        variant="dark"
        href={`${props.url}/${props.program.id}`}
        aria-label={`view ${props.buttonText}`}
      >
        {props.buttonText}
      </Button>
      <br></br>
    </>
  );
};

export default ProgramButton;
