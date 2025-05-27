import { useEffect, useState } from "react"

const useMousePostion = () => {
    const [position, setPosition] = useState<{x:number, y:number}>({x:0, y:0})

    function updatePostion (event : MouseEvent){
        setPosition({x:event.clientX, y:event.clientY})
    }

    //the reason we are using useEffect is because we dont want to add event listener every time any changes are happening to the function component (reloading is not included in changes). the event listener is added only during the mounting ([empty dependencies array])
    useEffect(()=> {
        window.addEventListener("mousemove", updatePostion)
        return () => {
            console.log("running clean up function")
            window.removeEventListener("mousemove", updatePostion)
        }
    }, [])

    return position
}

export default useMousePostion