import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav>
                    <div className="navnum">
                        <Link to="/">01. <div className="navigation"> Home</div></Link>
                        <Link to="/About">02. <div className="navigation">About</div></Link>
                        <Link to="/Projects">03. <div className="navigation">Projects</div></Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;