import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
  Route } from "react-router-dom";
import Layout from './Layout.jsx'

import {
	Home,
	About,
	Contact,
	User,
	Github,  
  githubInfoLoader ,
} from "./components";
/*there are 2 ways of routing*/

// 1st Routing
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "user/:userid",
				element: <User />,
			},
			{
        loader: githubInfoLoader,
				path: "github",
				element: <Github />,
			}
		],
	},
]);

// 2nd Routing 
// const router = createBrowserRouter(
// 	createRoutesFromElements(
// 		<Route path="/" element={<Layout />}>
// 			<Route path="" element={<Home />} />
// 			<Route path="about" element={<About />} />
// 			<Route path="contact" element={<Contact />} />
// 			<Route path="user/:userid" element={<User />} />
// 			<Route
// 				loader={githubInfoLoader}
// 				path="github"
// 				element={<Github />}
// 			/>
// 		</Route>
// 	)
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router} />

  </StrictMode>,
)
