import { useState } from "react"

export const Counter = () => {
    console.log('Counter Components...')
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)} style={{ backgroundColor: 'red', padding: '8px 16px' }}>Clicked {count} times</button>
    )
}