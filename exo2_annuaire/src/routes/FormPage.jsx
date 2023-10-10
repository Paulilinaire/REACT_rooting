import { useContext, useRef } from "react"
import { ContactContext } from "../contexts/ContactContext"
import Contact from "../models/Contact"
import { useNavigate } from "react-router-dom"

const FormPage = () => {

const { contacts, setContacts } = useContext(ContactContext)

const firstnameContactRef = useRef()
const nameContactRef = useRef()
const emailContactRef = useRef()
const phonenumberContactRef = useRef()
const submitButtonRef = useRef()

const navigate = useNavigate()

const submitFormHandler = (e) => {
  e.preventDefault()

  const firstname = firstnameContactRef.current.value
  const name = nameContactRef.current.value
  const email= emailContactRef.current.value
  const phonenumber = phonenumberContactRef.current.value

  const newContact = new Contact(firstname, name, email, phonenumber)
      setContacts((prevContacts=> [...prevContacts,newContact]))
      console.table(contacts);

      console.log("clic");
      navigate ("/contact")
  }
  

  const inputChangedHandler = () => {
    submitButtonRef.current.disabled = !firstnameContactRef.current.value || !nameContactRef.current.value || !emailContactRef.current.value || !phonenumberContactRef.current.value
  }


  return (
    <>
      <h3>Add Contact</h3>
      <hr />
      <form action="#" onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="firstnameContact" className="form-label">Prénom: </label>
          <input type="text" id="firstnameContact" required ref={firstnameContactRef} onChange={inputChangedHandler} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="nameContact" className="form-label">Nom: </label>
          <input type="text" id="nameContact" required ref={nameContactRef} onChange={inputChangedHandler} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailContact" className="form-label">Email: </label>
          <input type="text" id="emailContact" required ref={emailContactRef} onChange={inputChangedHandler} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumberContact" className="form-label">Numéro de téléphone: </label>
          <input type="text" id="phonenumberContact" required ref={phonenumberContactRef} onChange={inputChangedHandler} className="form-control" />
        </div>
        <hr />
        <div className="text-end">
          <button disabled ref={submitButtonRef} className="btn btn-success">
            <i className="bi bi-plus"></i> Ajouter
          </button>
        </div>
      </form>
    </>
  )
}


export default FormPage