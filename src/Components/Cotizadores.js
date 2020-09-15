import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Cotizadores.css";

class Cotizadores extends Component {
  handleChange(event) {
    this.setState({ fecha: event.target.value });
  }

  EnviandoFormulario = (e) => {
    e.preventDefault();
  };

  render() {
    const {
      fecha,
      moneda,
      monedas,
      cambiarMoneda,
      cotizacion,
      cambiarFecha,
    } = this.props;

    return (
      <form className="cotizador" onSubmit={this.EnviandoFormulario}>
        <h1>Historico de cotizaciones</h1>
        <label>Selecciona la moneda de referencia</label>
        <select  onChange={cambiarMoneda}>
          <option disabled selected>
            Moneda
          </option>
          {monedas.map((moneda, key) => (
            <option value={moneda[0]} key={key}>
              {moneda[0]}
            </option>
          ))}
        </select>

        <label>Ingresa fecha de cotizacion</label>

        <input type="date" value={fecha} onChange={cambiarFecha}></input>
        <button
          className="btn-buscar"
          type="submit"
          onClick={cotizacion}
        >
          Buscar Cotizaciones
        </button>
      </form>
    );
  }
}

export default Cotizadores;
