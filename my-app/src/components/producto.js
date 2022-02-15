import { Component } from "react";

class Producto extends Component {
    render() {
        const { producto } = this.props
        console.log(this.props);
        return (
            <div>
                <img alt={producto.name} src={producto.img} width="300" height="200"/>
                <h3>{producto.name}</h3>
                <h4>{producto.precio}</h4>
            </div>
        )
    }
}

export default Producto;