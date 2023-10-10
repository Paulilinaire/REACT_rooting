import { useNavigate } from "react-router-dom"

const ContactsPage = () => {

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
          <p>Il n' y a pas de contacts dans la base de données.</p>
        </>
      )
    }


export default ContactsPage