import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import { useEffect, useState } from 'react';

import {  useLoaderData, useLocation, useNavigate } from 'react-router';
import MovieCard from './MovieCard';
import Popup from './Popup';
export default function Navbar() {
    
 const { movies, query, page, type, error } = useLoaderData();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(query);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const location = useLocation();
   const isDetailPage = location.pathname.startsWith('/movie/');

  useEffect(() => {
   setSearchTerm(query);

   if (error) {
    setShowErrorPopup(true);
  }
  }, [error, query, page, type, navigate]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') return;

    // Don't duplicate
    setSearchHistory(prev => {
      const newHistory = [searchTerm, ...prev.filter(item => item !== searchTerm)];
      return newHistory.slice(0, 2); // only keep last 2
    });

    navigate(`/?q=${searchTerm}&page=1&type=${type}`);
  };

  const handleTypeChange = (selectedType) => {
    navigate(`/?q=${query}&page=1&type=${selectedType}`);
  };

  const handlePageChange = (newPage) => {
    navigate(`/?q=${query}&page=${newPage}&type=${type}`);
  };

  return (
   <>
        <div className="fixed top-0 left-0 w-full bg-white z-20 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center">
        <div>
          <h1 className="text-2xl font-bold whitespace-nowrap sm:mr-4">🎬 Movie Search App</h1>
        </div>
        {!isDetailPage && (
        <div className='flex gap-4'>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={handleSearch}
            searchHistory={searchHistory}
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
          />
          <FilterDropdown
            selectedType={type}
            onChange={handleTypeChange}
          />
        </div>)}
      </div>
    
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
     </>
  );}
 
