export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=6ba077b09d23f842a9241a68f5113d27&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };