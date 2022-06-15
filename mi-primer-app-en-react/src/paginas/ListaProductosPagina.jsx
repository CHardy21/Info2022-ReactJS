import BotonListar from "../componentes/BotonListar";
import ListaProductos from "../componentes/ListaProductos";
import Titulo from "../componentes/Titulo";

function ListaProductosPagina(){
    return(
        <section>
            <BotonListar />
            <Titulo />
            <ListaProductos />
        </section>
    )
}

export default ListaProductosPagina;