import React, {Component} from 'react';

class MiComponente extends Component{

    render(){
        let solicitud = {
            nombreUs: 'David',
            apellidoUs: 'Cruz',
            Direccion: 'Solanda',
            Telefono: '099999999'
        }
        let dias = {
            laborables: ['Lunes', 'Martes','Miercoles','Jueves','Viernes'],
            descanso: ['sabado','domingo'],
            total: 7
        }
        return (
            <React.Fragment>
            <h1>Lista de horarios Disponibles</h1>
            <hr/>
            <h2>{'Nombre de Usuario: ' + solicitud.nombreUs}</h2>
            <ul>
            {
                dias.laborables.map((laborable, i) =>{
                console.log(laborable);
                return(
                    <li key={i}>
                        {laborable}
                    </li>
                );
            })
            }
            </ul>
            </React.Fragment>
        );
    }
}

export default MiComponente;