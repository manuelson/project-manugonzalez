import {useState} from "react";
import PropTypes from 'prop-types';

export function LoginForm({setToken}) {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    async function loginUser(credentials) {
        return fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(data => data.json())
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="username" required onChange={e => setUserName(e.target.value)} />

                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="password" required onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div className="button-container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}