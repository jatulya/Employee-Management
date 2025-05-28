import { useSearchParams } from "react-router-dom"
import { Buttons, Header } from "../../components"

const Employee = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const setQuery = () => {
        searchParams.set("Role", "HR")
        setSearchParams(searchParams)
        console.log(searchParams)
    }

    const getQuery = () => {
        console.log("Bro")
        console.log(searchParams.get("Role"))
    }

    return (<>
        <Header heading="Employee Page" />
        <Buttons value="Set Query" type="button" onChange={setQuery} />
        <Buttons value="Get Query" type="button" onChange={getQuery} />
    </>)
}

export default Employee