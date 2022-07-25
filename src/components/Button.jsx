import React  , { useContext}from 'react'

import ThemaContext from '../context/ThemaContext'


const Button = () => {

    const data = useContext(ThemaContext)

    console.log(data)
  return (
    <div>Button
        {data}
    </div>
  )
}

export default Button