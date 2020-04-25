import React from 'react';
// import logo from './logo.svg';
import './App.css';
import banner_yo from './images/banner_yo.jpg';
import python from './images/python-icon-png-3.jpg';
import cplus from './images/c++.png';
import html from './images/html5.png';
import node from './images/nodejs-6-569582.png';
import mongo from './images/mongodb.png';
import instagram from './images/api_instagram.jpg';
import recocido from './images/recocido.jpg';
import inem from './images/logo-inem.png'
import utb from './images/logoutb-blanco.png';
import perfilinsta from './images/perfil-insta.jpeg';
import github from './images/github.png';
import instagramico from './images/instagram.ico';
import facebook from './images/facebook-512.png';
function App() {
  return (
    <div className="App">

      <div className="portada">
        <header>
          <div className="hamburger">
              <div className="_layer -top"></div>
              <div className="_layer -mid"></div>
              <div className="_layer -bottom"></div>
          </div>
          
          <nav className="menuppal">
              
              <ul>
                <li><a href="#sobremi">Sobre mi</a></li>
                <li><a href="#misestudios">Mis estudios</a></li>
                <li><a href="#mispasatiempos">Pasatiempos</a></li>
                <li><a href="#">Contacto</a></li>
              </ul>
            </nav>
        </header>
        <div className="parte-dos">
          <section className="rectangulo-izquierda">
              <article className="contenedor-rectangulo">
                <div className="minombre">
                  <p>Wilber A. </p>
                </div>
                <div className="minombre">
                  <p>Cajamarca Muñoz</p>

                </div>
                <div className="raya-rectangulo"></div>
                <div className="ocupacion">
                  <p>Diseñador y desarrollador Web</p>
                </div>
              </article>
            
          </section>
          <aside className="foto">
            <div className="imagenyo">
              <img src={banner_yo} alt="banner" />
            </div>
            <div className="usuario">
              <div className="correo">
                <a href="#">wilberandresm@hotmail.com</a>
              </div>
              <div className="arroba">
                <a href="https://www.instagram.com/wilberandresm/?hl=es-la" rel="noopener noreferrer" target="_blank">@wilberandresm</a>
              </div>
            </div>


          </aside>
      </div>
    </div>
    
        <div className="parte3">
          <div className="sobremi">
            <div className="titulo">
              <p>Sobre mí</p>
            </div>
            <div className="raya-parte3"></div>
            <div className="texto">
                <p>Mis conocimientos entre otro son: Python, C++, Flask, Html5, Css, Bootstrap, Materialize,Nodejs,MongoDB y GitHub.</p>

            </div>


          </div>
          
          <div className="lenguajes">
            <div className="contenedor-lenguajes">
              <div className="img-leng">
                  <img  src={python} alt="pyhton"> </img>
              </div>
              <div className="img-leng">
                  <img className="img-leng" src={cplus} alt="c++"> </img>
              </div>
              <div className="img-leng">
                  <img className="img-leng" src={html} alt=""> </img>
              </div>
              <div className="img-leng">
                  <img className="img-leng" src={node} alt=""> </img>
              </div>
              <div className="img-leng">
                  <img className="img-leng" src={mongo} alt=""> </img>
              </div>
              
            

            </div>
          </div>
          <div className="proyectos">
            <div className="titulo">
              <p>Mis proyectos</p>
            </div>
            <div className="contenedor-proyectos"> 
              <div className="container-slider">
                <a href="https://github.com/wilberandresm/api-restful" target="_blank" rel="noopener noreferrer" >
                  <img className="imagen-slider" src={instagram} alt=""> </img>
                
                <div className="overlay">
                  <div className="texto-overlay">
                      Creación de una api RESTful en base a la api de instagram,
                      que permite ver la eficiencia del perfil y el promedio de likes por post
                  </div>
                </div>
              </a>
              </div>

              <div className="container-slider">
                  <a href="https://github.com/wilberandresm/simulated-annealing" target="_blank" rel="noopener noreferrer" >
                    <img className="imagen-slider" src={recocido} alt=""> </img>
                  
                  <div className="overlay">
                    <div className="texto-overlay">
                        Alogoritmo de recocido simulado ,implementado para dar resolución
                        al problema del agente viajero con datos: berlin52.tsp
                    </div>
                  </div>
                </a>
                </div>
                <div className="boton">
                  <div className="vermas">
                    <a href="https://github.com/wilberandresm" role="button" target="_blank" rel="noopener noreferrer" > 
                      Ver más proyectos
                    </a>
                  </div>
                </div>
            </div>
          </div>

        </div>



      <div className="parte4">
        <div className="logos-estudios">
          <div className="logoinem">
            <img src={inem} alt=""> </img>
          </div>
          <div className="logoutb">
          <img src={utb} alt=""> </img>
          </div>
         </div>
        <div className="misestudios" >
          <div className="titulo">
            <p>Mis estudios</p>
          </div>
          <div className="texto">
            <p>Termine mis estudios de Bachillerato
              en el instito educativo INEM José Manuel Rodriguez Torices,
            reconocido por mi <b> excelencia academica </b> y sobresaliente en las pruebas del Estado ICFES.Actualmente me encuentro estudiando Ingenieria de Sistemas en la UTB.
            </p>

          </div>
        </div>
      </div>
 

   
      <div className="parte5">
        <div className="pasatiempos">
          <div className="titulo">
            <p>Mis pasatiempos</p>
          </div>
          <div className="texto">
            <p>
              Me gusta escuchar música , leer y en mis tiempos libres me gusta 
              dibujar , es una actividad que me sirve para cuando necesito concentrar,relajarme o 
              desahogarme.En mi perfil de instagram podrá encontrar algunos bocetos:
            </p>
          </div>
        </div>
        <div className="muestra">
          <div className="instagram">
              <a href="https://www.instagram.com/wilberandresm/?hl=es-la">
                <img src={perfilinsta} alt=""> </img>
              </a>

          </div>
          <div className="slider"></div>
        </div>
      </div>
   

        
    <footer className="parte6">
      <div className="titulo">
          Contacto: 
      </div>
      <div className="texto">
        <p>
          wilberandresm@hotmail.com
          
        </p>
      </div>
      <div className="texto">
        <p>+57 3209775168</p>

      </div>
      <div className="logos">
        <div className="logo" id="github">
          <a href="https://github.com/wilberandresm" target="_blank" rel="noopener noreferrer" >
            <img src={github} alt=""> </img>
          </a>

        </div>
        <div className="logo" id="github">
            <a href="https://www.facebook.com/wilber98" target="_blank" rel="noopener noreferrer" >
              <img src={facebook} alt=""> </img>
            </a>
  
        </div>
        <div className="logo" id="github">
            <a href="https://www.instagram.com/wilberandresm/?hl=es-la" target="_blank" rel="noopener noreferrer" >
              <div>
              <img src={instagramico} alt=""> </img>
              </div>
            
            </a>
  
        </div>
      </div>
    </footer>


    </div>
  );
}

export default App;
