import Producto from "../Producto";

function ListaProductos(){
    return(
        [1,2,3].map((value,index) => <Producto key={value} />)
    )

}
export default ListaProductos;