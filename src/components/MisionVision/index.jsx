import React, { useContext, useEffect, useState } from 'react';
import { MediaQueryTablet, MediaQueryDesktop} from '../../lib/mediaQuery';

//importación de componentes
import { WhatHow } from '../QueComo/whatHow';
import img_piece_blue from '../../assets/piece_blue.png';
import img_piece_medium_blue from '../../assets/piece_medium_blue.png'
import img_piece_red from '../../assets/piece_red.png';
import img_piece_medium_red from '../../assets/piece_medium_red.png';
import img_piece_green from '../../assets/piece_green.png';
import img_piece_medium_green from '../../assets/piece_medium_green.png';

export const MisionVision = () => {
    import ('./estilos.sass');
    import('../QueComo/estilos.sass');

    const [widthSize, setWidthSize] = useState("Mobile"); // Variable UseState que cambiará cuando se cargue la página o cuando se redimensione esta

    const ResizeMisionVision = () => { // Constante que guarda la función que valida con que media Query se está trabajando
        // MediaQueryDesktop() -> Verdadero si se pasa de 1024px
        if(MediaQueryDesktop()){
            setWidthSize("Desktop"); // Se cambia la variable, para volver a correr el código
        // MediaQueryTablet() -> Verdadero si se pasa de 768px
        } else if (MediaQueryTablet()) {
            setWidthSize("Tablet"); // Se cambia la variable, para volver a correr el código
        } else {
            setWidthSize("Mobile"); // Se cambia la variable, para volver a correr el código
        }
    }

    useEffect(() => {
        window.addEventListener('resize', ResizeMisionVision); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CAMBIA DE TAMAÑO (EN TIEMPO REAL)
        window.addEventListener('load', ResizeMisionVision); // REALIZAR LA FUNCIÓN CUANDO LA PÁGINA CARGA POR PRIMERA VEZ
        return () => {
            window.removeEventListener('resize', ResizeMisionVision); // REMOVER EVENTLISTENER
            window.removeEventListener('load', ResizeMisionVision); // REMOVER EVENTLISTENER
        }
    }, [])

    return (
        <>
            <div className="history">
                <div>
                    <h4>Nuestra historia</h4>
                    <br />
                    <p>
                    Fomentamos el empleo y el emprendimiento a través de la formación 
                    en artes y oficios; dirigido a jóvenes y adultos en diferentes 
                    comunidades del Departamento de Antioquia.Fomentamos el empleo y 
                    el emprendimiento a través de la formación en artes y oficios; 
                    dirigido a jóvenes y adultos en diferentes comunidades del departamento 
                    de Antioquia. Fomentamos el empleo y el emprendimiento a través de la 
                    formación en artes y oficios; dirigido a jóvenes y adultos en diferentes 
                    comunidades del departamento de Antioquia.
                    </p>
                </div>
                <br />
            </div>
            <div className="aboutUs__cards">
                <WhatHow
                    clase="aboutUs__container aboutUs__container--white"
                    clase2="aboutUs__img"
                    clase3="aboutUs__figure"
                    clase4="aboutUs__puzzle--margin aboutUs__puzzle--none"
                    clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerOne animate__animated"
                    alt="Pieza azul"
                    // Condicional para enviar la importación de una imagen u otra, dependiendo del tamaño de la pantalla dado por los MediaQuery
                    src={ MediaQueryDesktop() ? img_piece_medium_blue : MediaQueryTablet() ? img_piece_medium_blue : img_piece_blue }
                    subtitle="Misión"
                    text=""
                >
                    <p>Trabajamos para generar en las poblaciones vulnerables <span>en especial 
                        niños, jóvenes y adultos que tengan algún tipo de discapacidad</span>, 
                        Oportunidades de inclusión social, laboral, emprendimiento y de 
                        formación en artes y oficios.
                    </p>
                </WhatHow>
                <WhatHow
                    clase="aboutUs__container aboutUs__container--black"
                    clase2="aboutUs__img"
                    clase3="aboutUs__figure"
                    clase4="aboutUs__puzzle--height animate__animated"
                    clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerOne animate__animated"
                    alt="Pieza verde"
                    // Condicional para enviar la importación de una imagen u otra, dependiendo del tamaño de la pantalla dado por los MediaQuery
                    src={ MediaQueryDesktop() ? img_piece_medium_green : MediaQueryTablet() ? img_piece_medium_green : img_piece_green }
                    subtitle="Visión"
                    text="Proyectamos para el 2025 aumentar el número de beneficiarios con 
                    los diferentes programas de inclusión social, laboral, emprendimiento 
                    y de formación en artes y oficios."
                >
                </WhatHow>
                <WhatHow
                    clase="aboutUs__container aboutUs__container--white"
                    clase2="aboutUs__img"
                    clase3="aboutUs__figure"
                    clase4="aboutUs__puzzle--height animate__animated"
                    clase5="aboutUs__puzzle--larger aboutUs__puzzle--largerTwo aboutUs__puzzle--none"
                    alt="Pieza roja"
                    // Condicional para enviar la importación de una imagen u otra, dependiendo del tamaño de la pantalla dado por los MediaQuery
                    src={ MediaQueryDesktop() ? img_piece_medium_red : MediaQueryTablet() ? img_piece_medium_red : img_piece_red }
                    subtitle="Nuestros valores"
                    text=""
                >
                    <ul className="valores">
                        <li>Amor por lo que hacemos</li>
                        <li>Respeto</li>
                        <li>Compromiso</li>
                        <li>Profesionalismo</li>
                        <li>Confianza</li>
                        <li>Generosidad</li>
                        <li>Ética</li>
                    </ul>
                </WhatHow>
            </div>
        </>
    )
}