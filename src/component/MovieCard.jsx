import { Link } from "react-router";
import defaultImage from '../assets/default-image.jpg';

const MovieCard = ({ movie }) => (
  <Link to={`/movie/${movie.imdbID}`} className="block h-full group">
    <div className="bg-white rounded shadow py-2  h-full flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 hover:shadow-xl" >
         <img
          src={movie.Poster}
          alt={movie.Title}
          onError={(e) => {
            e.currentTarget.onerror = null; // Prevent infinite loop
            e.currentTarget.src = defaultImage;
          }}
          className="w-full h-50 object-cover rounded"
        />
      <div className="mt-2 flex flex-col justify-between flex-grow px-2">
        <h3 className="font-semibold text-base md:text-lg group-hover:text-blue-600 transition-colors">
          {movie.Title}
        </h3>
        <p className="text-gray-500 text-sm mt-auto">
          {movie.Year} • <span className="capitalize">{movie.Type}</span>
        </p>
      </div>
    </div>
  </Link>
);

export default MovieCard;
