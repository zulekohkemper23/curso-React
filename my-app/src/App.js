import { Component } from 'react';
import Productos from './components/productos';

class App extends Component {
  state = {
    productos: [
      { name: "Escritorio", precio: 100000, img: '/productos/arbejas.jpg' },
      { name: "Computadora", precio: 750000, img: '/productos/computadora.jpg' },
      { name: "Headphone", precio: 30000, img: '/productos/headphones.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <Productos agregarAlCarrito={() => console.log("agregado")} productos={this.state.productos}/>
      </div>
    )
  }
}


export default App;
