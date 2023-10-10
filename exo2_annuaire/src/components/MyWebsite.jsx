import { ContactContext } from "../contexts/ContactContext"
import router from "../app-routing"
import { RouterProvider } from "react-router-dom"
import { useState } from "react"

const MyWebsite = () => {

    const [contacts, setContacts] = useState([])
    console.log(contacts);

    return (
    <ContactContext.Provider value={{contacts, setContacts}}>
        <RouterProvider router={router} />
    </ContactContext.Provider>
    )
}

export default MyWebsite