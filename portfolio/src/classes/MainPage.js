import React from 'react'; 
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';   
import {MdOutlinePersonOutline} from 'react-icons/md';
import {BsLinkedin, BsFillFileEarmarkPdfFill} from 'react-icons/bs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import pongi from '../img/pong.png' 
import pongv from '../videos/pong.mp4'
import yo from '../img/yo.jpg' 
import procedural from '../img/procedural.png'
import proceduralv from '../videos/procedural.mp4'
import fguys from '../img/fguys.png'
import fallguys from '../videos/fallguys.mp4'
import dh from '../img/dh.png'
import dhv from '../videos/dh.mp4'
import dialogue from '../img/dialogue.png'
import dialoguev from '../videos/dialogue.mp4'
import rpg from '../img/rpg.png'
import rpgv from '../videos/rpg.mp4'
import buildingi from '../img/building.png'
import buildingv from '../videos/building.mp4'
import cven from '../cvs/CVEnglish.pdf'
import cves from '../cvs/CVEspanol.pdf' 

const data = [{
    id: 0,
    titleES: "Sobre mi",
    titleEN: "About me",
    ES: "Te presento mi portfolio. Mi nombre es Jorge Quintana Llitrá y tengo un grado universitario de Ingeniería informática en la Universidad de Las Palmas de Gran Canaria. Mi situación laboral actual es desempleado porque mi objetivo principal consiste en dedicarme profesionalmente a desarrollar videojuegos. Por tanto, actualmente estoy formándome para conseguir mi objetivo. Desde 2019 a 2022 he trabajado como desarrollador web/aplicaciones y he realizado prácticas de empresa en una compañia que desarrollaba un juego de realidad virtual en Unity. Gracias a ello mi interés acerca del desarrollo de videojuegos aumentó y por ello estoy aprendiendo. En este portfolio he resumido parte de mi formación que quiero mostrar.",
    EN: "I present you my portfolio. My name is Jorge Quintana Llitrá and I have a university degree in Computer Engineering at the University of Las Palmas de Gran Canaria. My current job situation is unemployed because my main goal is to dedicate myself professionally to develop videogames. Therefore, I am currently training to achieve my goal. From 2019 to 2022 I have worked as a web/application developer and I have done an internship in a company developing a virtual reality game in Unity. Thanks to that my interest about videogame development increased and so I am learning. In this portfolio I have summarized part of my training that I want to show.",
    img: yo,
    cv: <a href={cves} title="CV Español" download><BsFillFileEarmarkPdfFill className='w-[20px] h-[20px]'></BsFillFileEarmarkPdfFill></a>,
    cve: <a href={cven} title="CV English" download><BsFillFileEarmarkPdfFill className='w-[20px] h-[20px]'></BsFillFileEarmarkPdfFill></a>,
    linkdn: <a href={"https://www.linkedin.com/in/jorge-quintana-llitrá-00b66017b"} target="_blank" rel="noreferrer"><BsLinkedin className='w-[20px] h-[20px]'></BsLinkedin></a>, 
    icon: <MdOutlinePersonOutline key={0} className='w-[100px] h-full inline-block' ></MdOutlinePersonOutline> 
  },{
    id: 1,
    titleES:"Dimensional Hike",
    titleEN:"Dimensional Hike",
    ES: "Proyecto en el que actualmente estoy trabajando. Se trata de un juego en 2D y 3D en el que tendrás que ir resolviendo puzzles y pasar entre distintos obstáculos. Mi trabajo consiste en desarrollar toda la programación del juego en base a lo que ya he aprendido en los cursos y mi propia formación personal.",
    EN: "Project I'm currently working on. It is a 2D and 3D game in which you will have to solve puzzles and go through different obstacles. My job is to develop all the programming of the game based on what I have already learned in the courses and my own personal training.",
    img: dh,
    video: dhv
  },{
    id: 2,
    titleES:"Building System",
    titleEN:"Building System",
    ES: "Proyecto en el cual construí unas mecánicas de construcción inspiradas en el famoso juego de supervivencia Valheim. Diseñé 3 tipos de estructuras; Muro, Suelo y Escalera. Luego, le añadí a cada estructura las posiciones relativas que quería que tuviera con respecto a las demás, teniendo en cuenta su rotación. Por último, le agregúe un sistema de particulas para cuando destruyes un objeto, unas texturas y edificios para mejorar la ambientación.",
    EN: "Project in which I built some construction mechanics inspired by the famous survival game Valheim. I designed 3 types of structures; Wall, Floor and Ladder. Then, I added to each structure the relative positions I wanted it to have with respect to the others, taking into account its rotation. Finally, I added a particle system for when you destroy an object, some textures and buildings to improve the atmosphere.",
    img: buildingi,
    video: buildingv
  },{
    id: 3,
    titleES:"Pong Online",
    titleEN:"Pong Online",
    ES: "Este es mi primer projecto para aprender a gestionar el multijugador en LAN en Unity. En él, aprendí a gestionar las herramientas que te ofrece Unity para el desarrollo del online ('Unity Netcode', 'Networking', 'Lobby', 'Relay'...). Quise recrear un juego sencillo donde pudiera ofrecer una experiencia en LAN teniendo a uno de los usuarios como Host.",
    EN: "This is my first project to learn how to manage LAN multiplayer in Unity. In it, I learned how to manage the tools that Unity offers you for online development ('Unity Netcode', 'Networking', 'Lobby', 'Relay'...). I wanted to recreate a simple game where I could offer a LAN experience having one of the users as Host.",
    img: pongi,
    video: pongv
  },{
    id: 4,
    titleES:"Fall Guys Character Controller",
    titleEN:"Fall Guys Character Controller",
    ES: "Proyecto en el cual recreé las mecánicas principales de Fall Guys. También fue la primera vez que animé un personaje y cambié el modelado de uno ya existente. Mecánicas: Doble salto hacia adelante, agarrar a un personaje, cámara 3D circular, diferentes tipos de trampas...",
    EN: "Project in which I recreated the main mechanics of Fall Guys. It was also the first time I animated a character and changed the modeling of an existing one. Mechanics: Double jump forward, grab a character, circular 3D camera, different types of traps...",
    img: fguys,
    video: fallguys
  },{
    id: 5,
    titleES:"Procedural Map",
    titleEN:"Procedural Map",
    ES: "En esta parte de la formación, he diseñado diferentes habitaciones que se conectaban entre sí por los cuatro lados. Luego añadí una serie de reglas que hacen que se cree un mapa diferente para cada nivel, pudiendo cambiar los porcentajes de aparición de cada tipo de habitación. Todo esto me sirvió para aprender las bases necesarias y construir así un mapa procedural.",
    EN: "In this part of the training, I designed different rooms that were connected to each other on all four sides. Then I added a series of rules that make a different map is created for each level, being able to change the percentages of appearance of each type of room. All this helped me to learn the necessary basics and build a procedural map.",
    img: procedural,
    video: proceduralv
  },{
    id: 6,
    titleES:"Unity Dialogue & Quests: Intermediate C# Game Coding",
    titleEN:"Unity Dialogue & Quests: Intermediate C# Game Coding",
    ES: "Curso certificado donde aprendí a hacer Scriptables Objects, crear una ventana en Unity totalmente desde 0 (en este caso para hacer díalogos), programar un inventario con drag and drop, crear un sistema de guardado dinámico serializable y muy fácilmente extensible. ",
    EN: "Certified course where I learned how to make Scriptable Objects, create a window in Unity completely from 0 (in this case to make dialogs), program an inventory with drag and drop, create a dynamic saving system serializable and very easily extensible. ",
    img: dialogue,
    video: dialoguev
  },{
    id: 7,
    titleES:"Create an RPG Game in Unity",
    titleEN:"Create an RPG Game in Unity",
    ES: "En este último curso aprendí a crear un juego entero de RPG. Durante el curso, he utilizado modelados de contenido descargable y ello me ayudó a organizar el proyecto y programar sus funcionalidades. Aprendía a diseñar un nivel con terreno, a tener en cuenta el rendimiento de la iluminación, al sistema de combate de un RPG, etc.",
    EN: "In this last course I learned how to create an entire RPG game. During the course, I used downloadable content modeling and this helped me to organize the project and program its functionalities. I learned how to design a level with terrain, how to take into account the lighting performance, the combat system of an RPG, etc.",
    img: rpg,
    video: rpgv
  }]; 
  
export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { lang: "ES" }
    } 
  
    OnSelect = (a) => { 
        this.setState({lang: a.value}); 
    }
    
    render() {
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
                    <h1 className='text-2xl font-bold' >{item["title" + this.state.lang]}</h1>
                        <span className='mt-5 break-normal ' >
                            {item[this.state.lang]}
                        </span>
                    <div className="w-full mt-3 flex justify-center space-x-2">  
                        {item.cv}
                        {item.cve}
                        {item.linkdn}
                    </div>  
                </div> 
            </div>
        </Slide> 
        })
        
        const content = data.map((item) => {
            let result = item.icon ??  <img key={item.id} alt='' src={item.img} />;
        
            return (<Dot className='w-[150px] h-[100px] scale-[0.75] rounded-lg shadow-md transition-all' 
            slide={item.id}>{result}</Dot>);
        })   
    
        const languages = ["ES", "EN"];
        const defaultOption = languages[0];

        return (
            <div> 
                <div className='w-full flex justify-end items-end mt-3 pr-3'>
                    <Dropdown options={languages} onChange={this.OnSelect} value={defaultOption} />
                </div>
                <div> 
                    <CarouselProvider
                        className='mt-20 mb-40'
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
  }