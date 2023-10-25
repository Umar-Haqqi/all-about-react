import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact'

// router
const router = createBrowserRouter(
  [
    {
      // '/' is the top level element and nesting will be inside in it
      path: '/',

      // acc to layout design every element will be now in between header and footer
      element: <Layout />,

      // now adding children exp: contact,about
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />
        },
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> at this moment can ignore app file */}


    {/* this component takes a props and will not work without a prop */}
    <RouterProvider router={router} /> 
    {/* now this control whole routing without reloading the page*/}
  </React.StrictMode>,
)
