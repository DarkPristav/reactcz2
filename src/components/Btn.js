import './Btn.css'

const Btn = (props) => {
  return (
    <button className="btn" onClick={props.decreaseByOne}>Snížit o 1</button>
  )
}

export default Btn