import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'

// router
const router = createBrowserRouter(
  [
    {
      // '/' is the top level element and nesting will be inside in it
      path: '/',
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
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* this component takes a props and will not work without a prop */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
