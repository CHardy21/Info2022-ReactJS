// URL del servicio
const PRODUCTOS_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

// function para buscar los productos en servicios
export const getProductos = async () => {
    const productos = await fetch(PRODUCTOS_URL);
    return productos.json();
}