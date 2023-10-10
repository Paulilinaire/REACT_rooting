import { useRef } from "react"

const FormPage = () => {

  const firstnameContactRef = useRef()
  const nameContactRef = useRef()
  const emailContactRef = useRef()
  const phonenumberContactRef = useRef()

  const submitFormHandler = (e) => {
    e.preventDefault()

    const firstname = firstnameContactRef.current.value
    const name = nameContactRef.current.value
    const email= emailContactRef.current.value
    const phonenumber = phonenumberContactRef.current.value

    firstnameContactRef.current.value = ""
    nameContactRef.current.value = ""
    emailContactRef.current.value = ""

    const formValues = {
      firstname,
      name,
      email,
      phonenumber
    }

    console.log(formValues)
  }

  return (
    <>
      <h3>Add Contact</h3>
      <hr />
      <form onSubmit={submitFormHandler}>
        <div className="mb-3">
          <label htmlFor="firstnameContact" className="form-label">Prénom: </label>
          <input type="text" id="firstnameContact" required ref={firstnameContactRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="nameContact" className="form-label">Nom: </label>
          <input type="text" id="nameContact" required ref={nameContactRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="emailContact" className="form-label">Email: </label>
          <input type="text" id="emailContact" required ref={emailContactRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumberContact" className="form-label">Numéro de téléphone: </label>
          <input type="text" id="phonenumberContact" required ref={phonenumberContactRef} className="form-control" />
        </div>
        <hr />
        <div className="text-end">
          <button className="btn btn-outline-light">
            <i className="bi bi-plus"></i> Ajouter
          </button>
        </div>
      </form>
    </>
  )
}

export default FormPage