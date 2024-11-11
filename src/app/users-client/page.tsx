"use client";
import { useEffect, useState } from "react"

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number
}

export default function UserClient() {
    const [user, setUser] = useState<User[]>([]);
    // const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                if (!response.ok) throw new Error('Failed to Fetch users');
                const data = await response.json();
                setUser(data);
            }
            catch (err) {
                setError(`Failed to fetch users: ${err}`)
            }
        }
        fetchUsers();
    }, [])
    if (error) return <div>{error}</div>
    return (
        <ul className="space-y-4 p-4">
            {
                user.map((i) => (
                    <li key={i.id} className="bg-white shadow-md rounded-lg text-gray-700 p-4">
                        {i.name}<br />{i.email}
                    </li>
                ))
            }
        </ul>
    )
}

//35.37