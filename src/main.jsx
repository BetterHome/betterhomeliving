import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root';
import Home from './pages/home';
import About from './pages/about';
import TermsOfUse from './pages/TermsofUse';
import PrivacyPolicy from './pages/PrivacyPolicy';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:"About",
        element:<About/>
      },
      {
        path:"PrivacyPolicy",
        element:<PrivacyPolicy/>
      },
      {
        path:"TermsOfUse",
        element:<TermsOfUse/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
