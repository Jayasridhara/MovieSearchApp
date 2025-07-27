import { searchMovies } from "../services/omdbService";


export const searchPageLoader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || 'avengers';
  const page = parseInt(url.searchParams.get('page')) || 1;
  const type = url.searchParams.get('type') || '';

  const data = await searchMovies(query, page, type);

  if (data.Response === 'True') {
    return {
      movies: data.Search,
      totalResults: parseInt(data.totalResults),
      query,
      page,
      type,
      error: null,
    };
  } else {
    return {
      movies: [],
      totalResults: 0,
      query,
      page,
      type,
      error: "Search result not found",  
    };
  }
};