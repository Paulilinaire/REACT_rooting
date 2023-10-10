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
            {contacts.length === 0 ? 
              <p>Il n'y a pas de contact dans la base de données!</p> :
            [...contacts].sort((a,b)=> a.id.localeCompare(b.id)).map(c => <ContactDisplay key={contacts.id} contactId={contacts.id}/>)}
           </>

          )
        }
        
        export default ContactsPage
        