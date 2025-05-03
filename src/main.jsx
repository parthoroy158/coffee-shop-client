import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Layout/AddCoffee.jsx';
import SignUp from './Layout/SignUp.jsx';
import SignIn from './Layout/SignIn.jsx';
import Home from './Layout/Home.jsx';
import Update from './Layout/Update.jsx';
import Provider from './Provider/Provider.jsx';
import NewUsers from './Layout/NewUsers.jsx';
import View from './Layout/View.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: '/newUsers',
        element: <NewUsers></NewUsers>,
        loader: () => fetch('http://localhost:5000/newusers')
      },
      {
        path: '/view/:id',
        element: <View></View>,
        loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
