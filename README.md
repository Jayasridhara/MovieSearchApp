#This React application allows users to:

Search movies by title.

View movie details by ID.

Navigate using nested routes, with loader functions handling data fetching while showing animated placeholders.

It's built with React Router v7 via createBrowserRouter, leveraging loader-based routing, errorElement, and partial hydration for fast, SSR-compatible experiences.

📁 Project Structure
src/
  assets/
    loading.gif           ← fallback animation
  component/
    Layout.tsx            ← Defines header + <Outlet>
    SearchPage.tsx        ← Input and search results
  pages/
    MovieDetailsPage.tsx  ← Detailed info about a single movie
  Loader/
    searchPageLoader.ts   ← Fetches search results
    movieDetailsLoader.ts ← Fetches data for a movie ID
  App.tsx                 ← Main router config with `createBrowserRouter`
  index.tsx               ← Renders App
public/
  index.html