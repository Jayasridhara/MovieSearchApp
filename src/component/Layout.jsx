import { Outlet, useLoaderData, useLocation, useNavigate } from "react-router"
import Navbar from "./Navbar"
import { useEffect, useState } from "react";

function Layout() {

   const loaderData = useLoaderData();
  const { error } = loaderData || {};
  
  const navigate = useNavigate();
  const location = useLocation();
  
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const isDetailPage = location.pathname.startsWith('/movie/');

  // Show the error popup whenever the loader returns an error.
  useEffect(() => {
    if (error) {
      setShowErrorPopup(true);
    }
  
  }, [error]);

  return (
    <div className="h-full">
     
         <Navbar loaderData={loaderData}/>
        <Outlet context={{showErrorPopup,setShowErrorPopup,isDetailPage,navigate}}/>
      
      
    </div>
  )
}

export default Layout