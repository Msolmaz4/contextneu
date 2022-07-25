import React ,{useContext} from 'react'

import UserContext from '../context/UserContext'

const User = () => {

    const data = useContext(UserContext)
    console.log(data)
  return (
    <div>User

        {JSON.stringify(data)}
    </div>
  )
}

export default User