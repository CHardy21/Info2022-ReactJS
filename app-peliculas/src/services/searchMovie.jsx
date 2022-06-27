// URL del servicio
const SERVICE_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

// function para buscar los productos en servicios
export const searchMovies = async () => {
    const movies = await fetch(SERVICE_URL);
    return movies.json();
}