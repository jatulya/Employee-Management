  

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import { Layout } from "./components"
import NotFound from "./components/notFound/NotFound"
import {EmployeeDetails, EmployeeList, Login, CreateEmployee, Edit} from './pages'
import { Provider } from "react-redux"
import store from "./store/store"
import BookCatalog from "./pages/bookCatalog/bookCatalog/BookCatalog"

const App = () => {

  const router = createBrowserRouter([
    {
      path : "/", 
      element : <Login />
    },
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
        {path : ":id/edit", element : <Edit />},
        {path : ":id/library", element : <BookCatalog />}
      ]
    }
  ])
  return(<> 
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    </> )
}

export default App