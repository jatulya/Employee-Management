import { useState } from "react"

const Counter = () => {
    const [counter, setCount] = useState<number>(0)

    function increment () {
        setCount(counter+1)
    }

    function decrement () {
        setCount(counter-1)
    }

    return (<>
        <button onClick={increment} type="submit">Increment</button>
        <button onClick={decrement}  type="submit">Decrement</button>
        {counter}
    </>    
    )
}

export default Counter