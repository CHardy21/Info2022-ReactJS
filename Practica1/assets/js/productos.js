
const $botonListar = document.querySelector('#btnListar')
const PRODUCTOS_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

const getProductos = async () => {
    const productos = await fetch(PRODUCTOS_URL);
    return productos.json();
}


$botonListar.addEventListener('click', async (evento) => {
        evento.stopPropagation();
        const productos = await getProductos();

        console.log(productos);

    })
