import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import ContactDisplay from "../components/ContactDisplay"
import { useContext } from "react"
import { ContactContext } from "../contexts/ContactContext"



const ContactsPage = () => {

  const {contacts} = useContext(ContactContext)
  
  const navigate = useNavigate()


  const clickHandler = () => {
    console.log("addContact");
    navigate("/contact/add")

  }

    return (
          <>
          <div className="text-end">
            <button onClick={clickHandler} className="btn btn-outline-success">+</button>
          </div>
          <h3>Contact List</h3>
          <hr />
          {contacts.map(contact => (
            <ContactDisplay key={contact.id} contactId={contact.id}/>
          ))}
           </>

          )
        }
        
        export default ContactsPage
        