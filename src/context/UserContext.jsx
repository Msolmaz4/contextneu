import { createContext } from "react"

const UserContext = createContext()

export const UserProvider = ({children})=>{

const values= {
    id:1,
    username:'ada',
    bio:'loremmmmmmm'
}


    return<UserContext.Provider value={values}>{children}</UserContext.Provider>
}


export default UserContext
