import { createBrowserRouter } from "react-router-dom"
import App from './App'
import ErrorPage from "./routes/ErrorPage"
import HomePage from "./routes/HomePage"
import ContactsPage from "./routes/ContactsPage"
import FormPage from "./routes/FormPage"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/contact",
        element: <ContactsPage />
      },
      {
        path: "/contact/add",
        element: <FormPage />
      },
      {
        path: "/contact/edit/:contactId",
        element: <FormPage />
      },
      {
        path: "/contact/delete/:contactId",
        element: <FormPage />
      }
    ]
  }
])

export default router