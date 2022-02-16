import { Component } from 'react';
import Productos from './components/productos';
import Layout from './components/Layout'

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", precio: 100000, img: '/productos/tomate.jpg' },
      { name: "Computadora", precio: 750000, img: '/productos/computadora.jpg' },
      { name: "Headphone", precio: 30000, img: '/productos/headphones.jpg' },
    ]
  }
  render() {
    return (
      <div>
        <Layout>
          <Productos agregarAlCarrito={() => console.log("agregado")} productos={this.state.productos} />
        </Layout>
      </div>
    )
  }
}


export default App;
