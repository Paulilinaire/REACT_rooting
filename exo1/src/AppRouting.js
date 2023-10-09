import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Form from "./routes/ContactMe";
import Menu from "./routes/Menu";
import Projects from "./routes/Projects";
import About from "./routes/About"


const router = createBrowserRouter([
    {path : "/",
    element: <Menu />,
    children: [
        {
            path : "/",
            element : <App/>
        },
        {
            path : "/Projects",
            element : <Projects/>
        },
        {
            path : "/ContactMe",
            element : <Form/>
        },
        {
            path : "/About",
            element : <About/>
        }
        
    ]},
])


export default router