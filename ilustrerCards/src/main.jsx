import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Pagina1 from "./pages/pagina1.jsx";
import Pagina2 from './pages/pagina2.jsx';
import Pagina3 from './pages/pagina3.jsx';
import Home from "./pages/Home.jsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,             
    errorElement: <h1>404 · Não encontrado</h1>,
    children: [
      { index: true, element: <App /> },   
      {path: 'home', element: <Home />},   
    ]
  },
   { path: 'pagina1', element: <Pagina1 /> },
      {path: 'pagina2', element: <Pagina2 />},
      {path: 'pagina3', element: <Pagina3 />},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
