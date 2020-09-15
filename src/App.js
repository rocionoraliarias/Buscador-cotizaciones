import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import UltimasCorizaciones from "./Components/UltimasCotizaciones";
import Cotizadores from "./Components/Cotizadores";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: moment().format("YYYY-MM-DD"),
      moneda: "USD",
      cotizaciones: [],
    };
  }
  componentDidMount() {
    this.cotizacion();
  }
  cotizacion = () => {
    const url = `https://api.exchangeratesapi.io/${this.state.fecha}?base=${this.state.moneda}`;
    const mostrar = axios(url);
    mostrar.then((data) => {
      this.setState({
        cotizaciones: data.data.rates,
      });
    });
  }

 cambiarMoneda = (e) => {
   this.setState({
     moneda : e.target.value,
   })
 }

 cambiarFecha = (e) =>{
   this.setState({
     fecha: e.target.value,
  
   })
 }

  render() {
    const { fecha, moneda, cotizaciones } = this.state;

    const monedas = Object.entries(cotizaciones).map(i => i)
    return (
      <div className="Container">
        <div className="contenido">
          <div className="letras">
            <Cotizadores
            fecha={fecha} 
            moneda={moneda}
            monedas={monedas}
            cambiarMoneda={this.cambiarMoneda}
            cotizacion={this.cotizacion}
            cambiarFecha={this.cambiarFecha}
            />
  
            <UltimasCorizaciones
            cotizaciones={cotizaciones} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
