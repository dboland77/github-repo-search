const baseURL = 'https://api.github.com/search/repositories';

export const getConfig = (searchTerm) => {
  return (
     {
        method: "GET",
        url: ``,
        headers: {
          accept: '*/*'
        },
        params : {
          q: searchTerm,
          sort: 'stars',
          order: 'desc',
          per_page: 10
        },
        baseURL
})};

// q=react+language:js&sort=stars&order=desc&per_page=10