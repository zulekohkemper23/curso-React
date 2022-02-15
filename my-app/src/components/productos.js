import { Component } from "react";
import Producto from './producto';

class Productos extends Component {
    render() {
        const { productos, agregarAlCarrito } = this.props

        return (
            <div>
                {productos.map(p =>
                    <Producto
                        agregarAlCarrito={agregarAlCarrito}
                        key={p.name}
                        producto={p}
                    />
                )}
            </div>
        )
    }
}

export default Productos;