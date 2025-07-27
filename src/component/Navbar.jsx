// components/Navbar.jsx


import { useLocation } from 'react-router';


export default function Navbar() {
  const { pathname } = useLocation();


  return (
    <div className="fixed top-0 left-0 w-full bg-white z-20 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center">
      <div>
        <h1 className="text-2xl font-bold whitespace-nowrap sm:mr-4">
          🎬 Movie Search App
        </h1>
      </div>
      
    </div>
  );
}
