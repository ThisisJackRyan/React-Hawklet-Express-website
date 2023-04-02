import rockCrest from "./pages/images/rockCrest.png";
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div class="header flex"> 
            <div class = "flex left x1">
                <Link className="link" to="/">
                    <img id="crest" src={rockCrest} alt="crest" />
                </Link>
            </div>
            <div class="x3"></div>
            <div class = "x5 flex center middle thanks   break1000">Rockhurst High School's very own Breαkfαst Cαfe!</div>
            <div id="nav" class="flex center middle right x4">
                <div><Link className="link" to="/Account">Account</Link></div>
                <div><Link className="link" to="/Order">Order</Link></div>
                <div><Link className="link" to="/About">About</Link></div>
            </div>
        </div>
    )
}

export default Header;