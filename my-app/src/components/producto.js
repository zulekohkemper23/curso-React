import { Component } from "react";
import Button from './Button';
const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarrito } = this.props
        console.log(this.props);
        return (
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} width="300" height="200" />
                <h3>{producto.name}</h3>
                <h4>{producto.precio}</h4>
                <Button onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto;