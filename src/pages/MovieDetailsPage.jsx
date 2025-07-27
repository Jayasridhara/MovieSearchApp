import { Link, useLoaderData, useNavigate } from "react-router";
import defaultImage from '../assets/default-image.jpg';

const MovieDetailsPage = () => {
  const movie = useLoaderData();
const navigate=useNavigate()
  return (
    <div className="p-4 max-w-4xl mx-auto mt-10">
      
      <div className="flex flex-col md:flex-row gap-6">
       <img
        src={movie.Poster}
        alt={movie.Title}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = defaultImage;
        }}
        className="w-full md:w-64 rounded"
      />
        <div>
          <h2 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h2>
          <p className="text-gray-700 mb-2">{movie.Genre}</p>
          <p className="text-gray-700 mb-2">{movie.Plot}</p>
          <p className="text-gray-600">🎭 Cast: {movie.Actors}</p>
          <p className="text-gray-600">🎬 Director: {movie.Director}</p>
          <p className="text-gray-600">⭐ Ratings:</p>
          <ul className="list-disc ml-6">
            {movie.Ratings.map((r, index) => (
              <li key={index}>{r.Source}: {r.Value}</li>
            ))}
          </ul>
         <button className="
        group relative md:flex  items-center bg-blue-600 text-white md:text-lg
        py-2 px-4 rounded overflow-hidden
        transition-colors duration-300 hover:bg-blue-700
      ">
        <span> <Link to="/" >Back to search </Link></span>
        <span className="
          inline-block ml-2 transform transition-transform duration-300
          -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100
        ">
          ⬅️
        </span>
      </button>   
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
