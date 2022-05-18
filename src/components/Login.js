import { signOut } from "firebase/auth";
import React from "react";
import { Button } from "react-bootstrap";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from "react-router-dom";
import auth from "./firebase.init";
const Login = () => {
    const logout = () => {
        signOut(auth);
    };
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        navigate('/')
    }
        return(
            <div style={{height: '100%'}} className="d-flex justify-content-center align-items-center mt-5 pt-5">
                <Button className="w-25 me-4" onClick={() => signInWithGoogle()}>SignWithGoogle</Button><br/>
                <Button className="w-25" onClick={() => logout()}>SignOUt</Button>
            </div>
        )
}
export default Login;