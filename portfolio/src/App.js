import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';   
import {MdOutlinePersonOutline} from 'react-icons/md';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pongi from './img/pong.png' 
import yo from './img/yo.jpg' 
import procedural from './img/procedural.png'
import fguys from './img/fguys.png'
import dialogue from './img/dialogue.png'
import dh from './img/dh.png'
import rpg from './img/rpg.png'
import pongv from './videos/pong.mkv'
import dialoguev from './videos/dialogue.mov'
import fallguys from './videos/fallguys.mkv'
import proceduralv from './videos/procedural.mkv'
import rpgv from './videos/rpg.mp4'
import dhv from './videos/dh.mov'
import React from 'react'; 

const data = [{
  id: 0,
  title: "Sobre mi",
  text: "He trabajado durante 3 años, hasta el 2022 como desarrollador web y de aplicaciones pero desde que hice unas practicas de empresa " +
  " de realidad virtual en Unity, se me había quedado una espinita clavada sobre el desarrollo de videojuegos, así que en ese mismo año decicí " +
  "dejar atrás la programación web y dedicarme en exclusiva a desarrollar videojuegos en Unity, he hecho esta página web para mostrarte un poco mi camino",
  img: yo,
  icon: <MdOutlinePersonOutline key={0} className='w-[100px] h-full inline-block' ></MdOutlinePersonOutline> 
},{
  id: 1,
  title:"Pong Online",
  text: "Este es mi primer projecto para aprender a gestionar el multijugador en LAN en Unity. En él, aprendí a gestionar las herramientas" +
  " que te ofrece Unity para el desarrollo del online ('Unity Netcode', 'Networking', 'Lobby', 'Relay'...). Quise recrear un juego sencillo "+
  "donde pudiera ofrecer una experiencia en LAN teniendo a uno de los usuarios como Host.",
  img: pongi,
  video: pongv
},{
  id: 2,
  title:"Fall Guys Character Controller",
  text: "Proyecto en el cual recreé las mecánicas principales de Fall Guys, tambíen fue la primera vez que animé un personaje y cambié el modelado" +
  " de uno ya existente. Mecánicas: Doble salto hacia adelante, agarrar a un personaje, cámara 3D circular, diferentes tipos de trampas...",
  img: fguys,
  video: fallguys
},{
  id: 3,
  title:"Procedural Map",
  text: "Diseñé diferentes habitaciones que se conectaban de diferente forma y luego le añadí una serie de reglas que hacen que se cree un mapa " +
  "diferente para cada nivel, pudiendo cambiar los porcentajes de aparición de cada tipo de habitación. Aprendí las bases para hacer un mapa procedural.",
  img: procedural,
  video: proceduralv
},{
  id: 4,
  title:"Unity Dialogue & Quests: Intermediate C# Game Coding",
  text: "Curso de pago donde me enseñaron a como hacer Scriptables Objects, a como crear una ventana totalmente desde 0 en Unity (en este caso para hacer díalogos)," +
  " programar un inventario con drag and drop, crear un sistema de guardado dinámico serializable y muy fácilmente extensible... En General, es en el curso en el que más aprendí " + 
  " de programación en Unity.",
  img: dialogue,
  video: dialoguev
},{
  id: 5,
  title:"Create an RPG Game in Unity",
  text: "En este último curso aprendí a crear un juego entero de RPG, cogía modelados de contenido descargabla gratuito he iba organizando el proyecto y " +
  "programando sus funcionalidades. Aprendía a diseñar un nivel con terreno, a tener en cuenta el rendimiento de la iluminación, al sistema de combate de un RPG...",
  img: rpg,
  video: rpgv
},{
  id: 6,
  title:"Dimensional Hike",
  text: "Proyecto en el que actualmente estoy trabajando. Se trata de un juego en 2D y 3D, en el que tendrás que ir resolviendo puzzles y plataformas. Me estoy encargando " +
  " de hacer toda la programación del juego en base a lo que ya he aprendido en los cursos y además añadiendo nuevos conceptos de un juego en 2D que nunca antes había visto.",
  img: dh,
  video: dhv
}];
   
function App() {
  const contentSlider = data.map((item) => {
 
    let content = <img className='rounded-lg shadow-md transition-all' alt='' src={item.img} /> 

    if (item.video !== undefined) {
      content = <video src={item.video} controls="controls"/>
    }
     
    return <Slide index={item.id} key={item.id} >
      <div className='flex justify-center m-4'>
        <div className="w-full md:w-1/3 flex flex-col justify-center"> 
          <div className='containerMedia' >
            {content}
          </div>
        </div> 
        <div className="w-full md:w-1/4 ml-3 flex flex-col justify-start"> 
          <h1 className='text-2xl font-bold' >{item.title}</h1>
          <span className='mt-5 break-normal ' >
            {item.text}
          </span>
        </div> 
      </div>
    </Slide> 
  })
 
  const content = data.map((item) => {
    let result = item.icon ??  <img key={item.id} alt='' src={item.img} />;

    return (<Dot className='w-[150px] h-[100px] scale-[0.75] rounded-lg shadow-md transition-all' 
    slide={item.id}>{result}</Dot>);
  })   
  return ( 
    <div> 
      <div> 
        <CarouselProvider
          className='mt-40 mb-40'
          naturalSlideWidth={40}
          naturalSlideHeight={50}
          isIntrinsicHeight={true} 
          totalSlides={contentSlider.length}
        >
          <Slider 
          className='mb-40'>
            {contentSlider}
          </Slider> 
          <div className='w-full flex justify-center items-center space-x-4'>
            {content}
          </div>
        </CarouselProvider> 
      </div> 
    </div>
  );
} 

export default App;
