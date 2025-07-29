import SearchBar from './SearchBar';
import FilterDropdown from './FilterDropdown';
import {  useEffect, useState } from 'react';

import {  useLoaderData, useLocation, useNavigate } from 'react-router';


export default function Navbar({loaderData}) {
      
 const { movies, query, page, type, error } = useLoaderData();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState(query);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const location = useLocation();
   const isDetailPage = location.pathname.startsWith('/movie/');

  useEffect(() => {
   setSearchTerm(query);    


  }, [query, page, type, navigate]);

  const handleSearch = () => {
    if (searchTerm.trim() === '') return; 

    // Don't duplicate
    setSearchHistory(prev => {
      const newHistory = [searchTerm, ...prev.filter(item => item !== searchTerm)];
      return newHistory.slice(0, 5); // only keep last 2
    });

    navigate(`/?q=${searchTerm}&page=1&type=${type}`);
  };

  const handleTypeChange = (selectedType) => {
    navigate(`/?q=${query}&page=1&type=${selectedType}`);
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
    
    
    </>
  );}
 
