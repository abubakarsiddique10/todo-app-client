import { signOut } from "firebase/auth";
import React from "react";
import { Nav } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "./firebase.init";
const Header = () => {
    const [user] = useAuthState(auth);
    const logout= () => {
        signOut(auth)
    }
    return(
        <div className="bg-dark text-white">
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
                {!user ? <Nav.Item>
                    <Nav.Link to='/login'  >Login</Nav.Link>
                </Nav.Item> : <Nav.Item>
                    <Nav.Link onClick={() => logout()} to="/signin">SignOUt</Nav.Link>
                </Nav.Item> }
                
                
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}
export default Header;