import React, { useState } from 'react'
const MyContext = React.createContext();

const ContextApis = ({children}) => {
    const [flag, setFlag] = useState(false)
    return (
        <MyContext.Provider value={flag, setFlag} >
            {children}
        </MyContext.Provider>
    )
}

export default ContextApis.Provider
