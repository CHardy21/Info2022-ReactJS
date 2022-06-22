import "./Producto.css"

function Producto({producto}){
    const { name, price, image, type } = producto;
    return(
        <div class="producto-box">
            <img src="https://www.bing.com/th?id=OIP.qH3-RRsFjbcg2ch2Rly4UAHaER&w=329&h=189&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" alt=""/> 
            <p>Nombre: <span> { name } </span> </p>
            <p>Precio: <span> { price } </span></p>
        </div>
    );
}

export default Producto;