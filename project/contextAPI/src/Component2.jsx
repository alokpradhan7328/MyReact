import React, { useContext } from 'react'
import { mainContext } from './main'


const Component2 = () => {

  const count = useContext(mainContext)
  return (
    <div>
      Count is inside here {count}
    </div>
  )
}

export default Component2
