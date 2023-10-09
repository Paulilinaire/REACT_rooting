import { NavLink, Outlet } from "react-router-dom";

function Menu() {
  return (
    <>
    <header className="Menu">
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid mb-4">
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/Projects">Projets</NavLink>
                <NavLink to="/ContactMe">ContactezMoi</NavLink>
                <NavLink to="/About">A propos</NavLink>
            </div>
        </nav>
    </header>
    <Outlet />
    </>
  );
}

export default Menu;
