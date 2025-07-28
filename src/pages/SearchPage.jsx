import {  useLoaderData, useNavigate } from 'react-router';

import Pagination from '../component/Pagination';
export default function SearchPage() {
  const navigate = useNavigate();
  const { movies, totalResults, query, page, type, error } = useLoaderData();
  const handlePageChange = (newPage) => {
    navigate(`/?q=${query}&page=${newPage}&type=${type}`);
  };
  return (
    <div className="">
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
