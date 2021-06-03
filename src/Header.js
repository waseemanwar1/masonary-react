import Button from "./Button";

// The number of columns change by resizing the window
const Header = (props) => {
  return (
    <div className="box">
      <p className="headText">
        <b>{props.header === "true" ? "Dennis Gecap " : ""}</b>
        {props.text}
        {props.header === "true" ? <Button text="About" sim_btn="false" /> : ""}
      </p>
    </div>
  );
};

export default Header;
