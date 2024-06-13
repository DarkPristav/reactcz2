import './BtnPlus.css'

const BtnPlus = (props) => {
  return (
    <button className="btn" onClick={props.plusByOne}>Zvýšit o 1</button>
  )
}

export default BtnPlus