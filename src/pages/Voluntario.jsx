import React from 'react';
import { Helmet } from 'react-helmet';

import { Formulario } from '../components/Formulario';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';

export const Voluntario = () => {
    return (
        <>
            <Helmet>
                <title>Voluntarios - Ofi Artes</title>
                <meta name="description" content="Conviértete en un voluntario" />
            </Helmet>
            <Modal/>
            <Header nombrePagina="voluntarios" titulo="Conviértete en un voluntario" contenido="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam non exercitationem natus repellendus aspernatur sed deleniti, facere velit cum similique!"/>
            <Formulario currentForm="voluntario">   
                <label htmlFor="name">Nombre completo</label>
                <input type="text" name="name" id="name" 
                placeholder="Ingrese su nombre completo" title="El nombre solo acepta letras y espacio en blanco"
                required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"/>     

                <label htmlFor="num_id">Número de identificación</label>
                <input type="number" name="num_id" id="num_id" 
                placeholder="Ingrese su identificación" title="El número de identificación debe ser valido" required/>  

                <label htmlFor="email">Correo electronico</label>
                <input type="email" name="email" id="email" 
                placeholder="Ingrese su correo" title="El correo es incorrecto"
                required pattern="^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"/>  
                    
                <label htmlFor="tel">Teléfono de contacto</label>
                <input type="number" name="tel" id="tel" 
                placeholder="Ingrese su télefono de contacto" title="El teléfono es requerido" required/>

                <div>
                    <label htmlFor="handling_info">Autorización de manejo de la información</label>
                    <p>
                        <br />
                        <input type="checkbox" name="handling_info" id="handling_info" required title="Debe aceptarla :D" value="Acepto"/>
                        Acepto que la Corporación Ofi Artes haga un buen uso de mi información.
                    </p>
                </div>                       
            </Formulario>
            <Footer />
        </>
    )
}


