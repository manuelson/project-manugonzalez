import {useEffect} from "react";
import { LoginForm } from './Login/LoginForm.jsx'
import useToken from '../components/App/useToken.jsx';

export function Login() {

    useEffect(() => {
        document.title = 'Login';
    }, []);

    const { token, setToken } = useToken();

    if(!token) {
        return (
            <>
                <LoginForm setToken={setToken}/>
            </>
        )
    }

    return (
        <>
           <span>You are already logged</span>
        </>
    )
}