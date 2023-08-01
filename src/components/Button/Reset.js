const Reset = (props) => {
    return (
      <button
        type="reset"
        className="buttonAlt"
        onClick={props.onFormJSResetButtonHandler}
      >
        Reset
      </button>
    );
  };
  
  export default Reset;
  