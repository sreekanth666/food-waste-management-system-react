import React, { createContext, useState } from 'react'
export const userApiHandleContext = createContext()

function ContextShare({children}) {
    const [requestsMadeByUser, setRequestMadeByUser] = useState([])
    const [getAllRequestsByPincode, setGetAllRequestsByPincode] = useState([])
    const [acceptedRequestsByUser, setAcceptedRequestsByUser] = useState([])
    const [update, setUpdate] = useState("")
    const [sessionUpdate, setSessionUpdate] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState("")
    return (
        <>
            <userApiHandleContext.Provider value={{requestsMadeByUser, setRequestMadeByUser, getAllRequestsByPincode, setGetAllRequestsByPincode, acceptedRequestsByUser, setAcceptedRequestsByUser, update, setUpdate, sessionUpdate, setSessionUpdate, isLoggedIn, setIsLoggedIn}}>
                {children}
            </userApiHandleContext.Provider>
        </>
    )
}

export default ContextShare