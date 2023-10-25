import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout.jsx'

// collect all component components here then export through a single file
import { Home } from './components'
import { About } from './components'
import { Contact } from './components'


// router
// const router = createBrowserRouter([
//   {
//     // '/' is the top level element and nesting will be inside in it
//     path: '/',

//     // acc to layout design every element will be now in between header and footer
//     element: <Layout />,

//     // now adding children exp: contact,about
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//     ]
//   }
// ])


// another approach for router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Route can also be a self closing */}
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> at this moment can ignore app file */}


    {/* this component takes a props and will not work without a prop */}
    <RouterProvider router={router} />
    {/* now this control whole routing without reloading the page*/}
  </React.StrictMode>,
)
