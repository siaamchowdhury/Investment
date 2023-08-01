

const Calculate = (props) => {
 
  return (
    <button
      type="reset"
      className="button"
      onClick={() => {props.isClicked(true)}}
    >
      Calculate
    </button>
  );
};
  
  export default Calculate;
  