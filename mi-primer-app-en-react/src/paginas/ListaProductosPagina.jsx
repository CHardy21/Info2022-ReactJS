import React, {useState} from "react";
import { useEffect } from "react";
import BotonListar from "../componentes/BotonListar";
import ListaProductos from "../componentes/ListaProductos";
import Titulo from "../componentes/Titulo";
import { getProductos } from "../servicios/productos"

// class ListaProductosPagina extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             productos: []
//         }
//         // bindeamos el evento
//         //this.handleBotonListar = this.handleBotonListar.bind(this);
//     }
//     async componentDidMount(){
//         // Estas lineas son leidas luego de q el componente es montado
//     }
//     async componentDidUpdate() {
//         // estas lineas seran leidas cuando el componente es actualizado (cambio su estado)
//     }
//     handleBotonListar = async () => {
//         const productos = await getProductos();
//         // actualizo el estado dentro de un componente de clase
//         this.setState({ productos })
//     }
//     render(){
//         const { productos } = this.state;
//         // esta linea si no se cumple la condicion no renderisa nada
//         // const miComponente = this.state.productos.length > 0 && <ListaProductos />
//         const miComponente = this.state.productos.length > 0 
//             ? <ListaProductos productos = { productos } /> 
//             : <p>Click en LISTAR...</p>
//         console.log(this.state.productos)
//         return(
//             <section>
//                 <BotonListar onClick={this.handleBotonListar}/>
//                 <Titulo />
//                 {miComponente}
//             </section>
//     )}
// }

// clase convertida a funcion
//const ListaProductosPagina = () => {
function ListaProductosPagina(props) {
    const [productos, setProducto] = useState([]);

    const handleBotonListar = async () => {
        const productos = await getProductos();
        setProducto(productos); 
    }

    // Estas lineas leen el servicio y carga los productos automaticamente
    // useEffect se ejecuta cada ves q se modifique el estado
    // useEffect(()=>{
        // const getProductosEnServicio = async () => {
        //     const productos = await getProductos();
        //     setProducto(productos); 
        // }
    
    //     getProductosEnServicio();
    // },[])

    const miComponente = productos.length > 0 
        ? <ListaProductos productos = { productos } /> 
        : <p>Click en LISTAR...</p>

    return(
        <section>
            <BotonListar onClick={handleBotonListar}/>
            <Titulo />
            {miComponente}
        </section>
    )
}

export default ListaProductosPagina;