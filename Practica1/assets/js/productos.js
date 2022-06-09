
const $botonListar = document.querySelector('#btnListar')
const $ProductList = document.querySelector('#productList');
const PRODUCTOS_URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

// function para buscar los productos en servicios
const getProductos = async () => {
    const productos = await fetch(PRODUCTOS_URL);
    return productos.json();
}

// Metodo para crear el HTML de productos
const crearHtmlProductos = (productos) => {
    const listaLi = productos.map(element => {
        const{ name, price } = element;
        // con cada producto creo un objeto li
        // y voy agregando la info del producto 
        const li = `
        <li>
            <img src="./assets/img/no-image.png" alt=""> 
            <p>Nombre: ${name}</p>
            <p>Precio: $ ${price}</p>
        </li>`;
        return li;
    });
    // creo el elemento UL con los distimtos LI (productos)
    const ulElement = `
        <ul class="listado">
        ${listaLi.reduce((previo, actual) => {
            return `
            ${previo}
            ${actual}
            `
        }, '')}
        </ul>
    `;
    return ulElement;
    }

// Function manejadora de evento (Event Handler)
const manejadorEventoClick = async (evento) => {
    // Evito la propagacion del evento hacia los padres    
    evento.stopPropagation();
    // busco los productos 
    const productos = await getProductos();
    // muestro en el html los productos
    const listadoHTML = crearHtmlProductos(productos);
    $ProductList.innerHTML = listadoHTML;
    // desactivo el boton y remuevo el evento click
    $botonListar.setAttribute('disabled', 'disabled');
    $botonListar.removeEventListener('click', manejadorEventoClick);
    }

// agrego el evento click del boton al manejador 
$botonListar.addEventListener('click', manejadorEventoClick);
