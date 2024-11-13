type MockUser = {
    id: number;
    name: string;
}
import { auth, currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export default async function MockUsers() {

    const authObj = await auth()
    const userObj = await currentUser()

    console.log('Auth Object', authObj)
    console.log('User Object', userObj)

    const response = await fetch('https://67331edb2a1b1a4ae1121c99.mockapi.io/next-begin');
    const users = await response.json();

    async function addUser(formData: FormData) {
        "use server";
        const name = formData.get('name');
        const res = await fetch('https://67331edb2a1b1a4ae1121c99.mockapi.io/next-begin',
            {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify({ name })
            }
        )
        const newUser = await res.json();
        revalidatePath('/mock-users')
        console.log(newUser)
    }
    return (
        <>
            <form className="my-3" action={addUser}>
                <input type="text" name="name" required className="border p-2 mr-2 rounded" style={{ height: "56px" }} />
                <button type="submit" className="bg-blue-500 text-white px-4 py-4">Add User</button>
            </form>
            <div className="grid grid-cols-4 gap-4 py-10">
                {
                    users.map((user: MockUser) => (
                        <div key={user.id} className="p-4 bg-white rounded text-gray-700 shadow-md">
                            {user.name}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
