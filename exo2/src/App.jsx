import './App.css';
import { Link, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();


  const clickhandler= () => {
    console.log("j'ai cliqué sur le bouton");
    navigate("/projects/963")
  }

  return (
    <div className="App">
      <main>
        <Link to={"/projects/123"}>Aller au projet</Link>
        <br />
        <button onClick={clickhandler}>Clic pour aller au projet</button>
      </main>
    </div>
  );
}

export default App;
