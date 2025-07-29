import {  useLoaderData, useNavigate, useOutletContext } from 'react-router';

import Pagination from './Pagination';
import MovieCard from './MovieCard';
import Popup from './Popup';

export default function SearchPage() {
  const navigate = useNavigate();
  const { movies, totalResults, query, page, type, error } = useLoaderData();
 const {showErrorPopup,setShowErrorPopup,isDetailPage}=useOutletContext()
  const handlePageChange = (newPage) => {
    navigate(`/?q=${query}&page=${newPage}&type=${type}`);
  };
  return (
    <div className="">
        {!isDetailPage && (
      <div className="flex-1 overflow-y-auto pt-[72px] pb-[64px] p-4 relative">
      {showErrorPopup && (
          <Popup
            message="No movies found for this search."
            onClose={() => {
              setShowErrorPopup(false);
              navigate('/'); // Clear query params after user confirms
            }}
          />
        )}

        {movies.length ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {movies.filter(m => m.Poster !== 'N/A').slice(0, 8).map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No movies found.</p>
        )}
      </div>
    )}
       <div className="fixed bottom-0 left-0 w-full bg-white z-20 pb-2">
        <Pagination
          currentPage={page}
          totalResults={totalResults}
          onPageChange={handlePageChange}
        />
      </div>  
    </div>
  );
}
