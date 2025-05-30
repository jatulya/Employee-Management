import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Layout } from "./components"
import NotFound from "./components/notFound/NotFound"
import {EmployeeDetails, EmployeeList, Login, CreateEmployee, Edit} from './pages'
const App = () => {

  const router = createBrowserRouter([
    {
      path : "/", 
      element : <Login />
    },
    // {
    //   path : "/login",
    //   element : <UncontrolledLogin />
    // },
    {
      path : "not-found",
      element : <NotFound />
    },
    {
      path : "/employee",
      element : <Layout />,
      children : [
        {index : true, element : <EmployeeList />},
        {path: "create", element : <CreateEmployee />},
        {path : ":id", element : <EmployeeDetails />},
        {path : ":id/edit", element : <Edit />}
      ]
    }
  ])
  return(<>
    <RouterProvider router={router}/>
    </> )
}

export default App