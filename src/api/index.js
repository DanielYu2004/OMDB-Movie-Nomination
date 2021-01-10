/**
   * Generates HTTP headers
   */
  const generateHeaders = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    return myHeaders
}

/**
   * Returns promise which resolves/rejects when fetch request finishes
   */
  const fetchRequest = (url, requestOptions) => {
    var base = process.env.NODE_ENV === "production" ? "https://www.omdbapi.com" : "https://www.omdbapi.com"
    return new Promise((resolve, reject) => {
        fetch(base + url, requestOptions)
            .then(response => response.text())
            .then(result => {
                return resolve(JSON.parse(result))
            })
            .catch(error => reject(error));
    })
}

/**
   * Retrieve first page of movie results with given search term
   */

  export const searchMovieResults = async (searchTerm) => {

    var requestOptions = {
        method: 'GET',
        headers: generateHeaders(),
        redirect: 'follow'
    };

    return fetchRequest(`/?s=${searchTerm}&type=movie&page=1&apikey=30425a6a`, requestOptions)
}