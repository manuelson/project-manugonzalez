import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export function Supabase() {

    console.log(import.meta.env)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_KEY
    );

    async function getUsers() {
        const { data } = await supabase.from("users").select();
        setUsers(data);
    }

    return (
        <ul>
            {users.map((user) => (
                <li key={user.username}>{user.username} - {user.password}</li>
            ))}
        </ul>
    )
}