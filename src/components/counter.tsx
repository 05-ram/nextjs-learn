"use client"
import { useUser } from "@clerk/nextjs";
import { useState } from "react"

export const Counter = () => {

    // const { isLoaded, isSignedIn, userId, sessionId } = useAuth();
    const { isLoaded, isSignedIn, user } = useUser();

    console.log('Counter Components...')
    const [count, setCount] = useState(0);
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    console.log(user)

    return (
        <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'red', padding: '8px 16px' }}>Clicked {count} times</button>
    )
}