import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export function Supabase() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const supabase = createClient(
        import.meta.env.VITE_SUPABASE_URL,
        import.meta.env.VITE_SUPABASE_KEY
    );

    supabase
        .channel('schema-db-changes')
        .on(
            'postgres_changes',
            {
                event: 'UPDATE',
                schema: 'public',
            },
            (payload) => console.log(payload)
        )
        .subscribe()

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