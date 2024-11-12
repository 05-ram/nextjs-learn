type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: number
}

export default async function UserServer() {
    await new Promise((resolve) => {setTimeout(resolve, 2000) })
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    return (
        <ul className="space-y-4 p-4">
            {
                users.map((i: User) => (
                    <li key={i.id} className="bg-white shadow-md rounded-lg text-gray-700 p-4">
                        {i.name}<br />{i.email}
                    </li>
                ))
            }
        </ul>
    )
}