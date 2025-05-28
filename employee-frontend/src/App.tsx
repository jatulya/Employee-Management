import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Counter from "./components/Counter"
import CreateEmployee from "./pages/createEmployee/CreateEmployee"
import Login from "./pages/login/Login"
import UncontrolledLogin from "./pages/login/UncontrolledLogin"
import { Layout } from "./components"
import NotFound from "./components/notFound/NotFound"
import Employee from "./pages/employee/Employee"
import EmployeeDetails from "./pages/employeeDetails/EmployeeDetails"

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/", 
      element : <Login />
    },
    {
      path : "/login",
      element : <UncontrolledLogin />
    },
    {
      path : "not-found",
      element : <NotFound />
    },
    {
      path : "/employee",
      element : <Layout />,
      children : [
        {index : true, element : <Employee />},
        {path: "create", element : <CreateEmployee />},
        {path : ":id", element : <EmployeeDetails />}
      ]
    }
  ])
  return(<>
    <RouterProvider router={router}/>
    </> )
}

export default App