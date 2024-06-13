import './ResetBtn.css';

const ResetBtn = (props) => {
  return (
    <button className="btn" onClick={props.resetByOne}>Resetování</button>
  )
}

export default ResetBtn