import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./component/Layout";

import MovieDetailsPage from "./pages/MovieDetailsPage";
import { searchPageLoader } from "./Loader/searchPageLoader";
import { movieDetailsLoader } from "./Loader/movieDetailsLoader";
import SearchPage from "./component/SearchPage";


function App() {

  const routes= [
  {
    path: '/',
    element: <Layout />,
    loader: searchPageLoader,
    hydrateFallbackElement: <p>Loading SearchPage…</p>,
    children: [
      {
        index: true,
        element: <SearchPage />,
        loader: searchPageLoader,
        hydrateFallbackElement: <p>Loading SearchPage…</p>,
      },
      {
        path: 'movie/:id',
        element: <MovieDetailsPage />,
        loader: movieDetailsLoader,
        errorElement: <p className="p-4 text-red-500">Movie not found or failed to load.</p>,
        hydrateFallbackElement: <p>Loading MovieDetailsPage…</p>,
      },
    ],
  },
];
 const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});
  return (
    <>
       <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
       
    </>
  )
}

export default App