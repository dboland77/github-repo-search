const baseURL = 'https://api.github.com/search/repositories';

export const getConfig = (searchTerm) => {
  let axiosConfig;
  return (
     axiosConfig = {
        method: "GET",
        url: ``,
        headers: {
          accept: '*/*'
        },
        params : {
          q: searchTerm
        },
        baseURL
})};