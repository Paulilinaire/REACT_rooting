import { useContext } from "react"
import { ContactContext } from "../contexts/ContactContext"


const ContactDisplay = (props) => {
    const context = useContext(ContactContext)
    const { contactId } = props
    const {contacts, setcontacts} = useContext(ContactContext)

    const foundcontact = context.contacts.find(t => t.id === contactId)
    console.log(foundcontact);

    return (
        <ul className="list-group">
            <li className="mb-3 list-group-item d-flex justify-content-between align-items-center">
                <span>{foundcontact.firstname}</span>
                <span>{foundcontact.name}</span>
                <span>{foundcontact.email}</span>
                <span>{foundcontact.phonenumber}</span>
                <button className= "btn btn-danger">Supprimer</button>
            </li>
        </ul>
    )
}

export default ContactDisplay