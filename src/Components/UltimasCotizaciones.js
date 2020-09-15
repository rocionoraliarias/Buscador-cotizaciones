import React, {Component} from 'react';
import CurrencyFlag from 'react-currency-flags';
import '../Components/UltimasCotizaciones.css'

class Sugeridas extends Component {
  
      constructor(props) {
        super(props);
        this.state = {
          filtradas: true,
        };
      }
    
     cambiarFiltro = () => {
       this.setState({ filtradas: !this.state.filtradas})
     }
  


 render(){
   const {cotizaciones,moneda } = this.props
   const {filtradas} = this.state
   const CurrencyFlagComponent1 = () => <CurrencyFlag currency={moneda} width={38} />;
   return ( 

<div className='contenedor-resultados' >

      {Object.entries(cotizaciones)
      .filter(moneda => 
        {
          return this.state.filtradas ?  moneda[0] === 'USD' || moneda[0] === 'CAD' || moneda[0] === 'EUR' || moneda[0] === 'GBP' : true
        })

      .map((i,key) => {

          const Imprimir = ( [i][0][0])
          const Imprimir2 = ( [i][0][1].toFixed(6))
          const CurrencyFlagComponent1 = () => <CurrencyFlag currency={i[0]} />;
        return(
          
          <div key={key}>
           
        <p><span className='bandera'>{CurrencyFlagComponent1()}{Imprimir}</span><span>{Imprimir2}</span></p>
        </div>
        )
        })

      }

      <button
      onClick={this.cambiarFiltro}
      > 
          Ver {filtradas ? 'más' : 'menos'} Cotizaciones
        </button>
        </div>
   )
};

}
   

export default Sugeridas;