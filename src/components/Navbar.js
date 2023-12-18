import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to="/">
                </Link>
                <nav>
                    <div>
                        <Link to="/">[1] Home</Link>
                        <Link to="/About">[2] About</Link>
                        <Link to="/Projects">[3] Projects</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;