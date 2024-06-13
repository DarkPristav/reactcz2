import Btn from './components/Btn.js'
import BtnPlus from './components/BtnPlus.js'
import ResetBtn from './components/ResetBtn'
import { useState } from "react"

const App = () => {

  const [value, setValue] = useState(0)

  const decreaseOne = () => {
    const newValue = value - 1
    setValue(newValue)
  }

  const plusOne = () => {
    const newValue = value + 1
    setValue(newValue)
  }

  const reset = () => {
    setValue(0)
  }

  return <div className="counter-box">
    <div className='counter-title'>
      <h1>{value}</h1>
    </div>
    <Btn decreaseByOne={decreaseOne} />
    <BtnPlus plusByOne={plusOne} />
    <ResetBtn resetByOne={reset} />
  </div>
}

export default App