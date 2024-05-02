import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import './index.css'
import Contact from './components/contact/Contact.jsx'
import { User } from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'

// 1 st method
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])


//2 nd Method
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>}>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:id' element={<User/>}/>
        <Route
          loader={githubInfoLoader}
          path='github' 
          element={<Github/>}
          />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
