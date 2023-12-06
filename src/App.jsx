import { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


import Home from './pages/Home';
import Articles from './pages/Articles';
import './App.css';
import Loader from './component/Loader';

function App() {


    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home/>,
        loader: Loader,
      },
      {
        path: "/articles",
        element: <Articles/>,
        loader: Loader,
      },
    ]);

return <RouterProvider router={router}/>;


 
}

export default App;
