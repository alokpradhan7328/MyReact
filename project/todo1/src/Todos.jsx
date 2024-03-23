import { useState } from "react"
import Todo from './Todo'

function Todos() {
    const [values, setValues] = useState([])
    const [value, setValue] = useState('')

  const add = () => {
    setValues([...values,value]);
    setValue('')
  }

  const remove = (id) => {
    values.splice(id,1);
    setValues([...values])
  }
  return (
    <div>
        <div>
            <input type="text"
            value={value} 
            onChange={(e) => setValue(e.target.value)}/> 
            <button onClick={add}>Click</button>
        </div>
        <div>
            <ul>
            {values.map((t, index) => (
                <Todo task={t} index={index} remove={remove}/>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default Todos
