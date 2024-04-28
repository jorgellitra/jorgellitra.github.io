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
import cven from '../files/CVEnglish.pdf'
import cves from '../files/CVEspanol.pdf'  
import pr1i from '../img/tokioschool/pr1i.png'
import tokio from '../img/tokioschool/tokio.png'
import pr1v from '../videos/tokioschool/pr1v.mp4'
import pr2i from '../img/tokioschool/pr2i.png'
import pr2v from '../videos/tokioschool/pr2v.mp4'
import pr3i from '../img/tokioschool/pr3i.png'
import pr3v from '../videos/tokioschool/pr3v.mp4'
import pr4i from '../img/tokioschool/pr4i.png'
import pr4v from '../videos/tokioschool/pr4v.mp4'
import pr5i from '../img/tokioschool/pr5i.png'
import pr5v from '../videos/tokioschool/pr5v.mp4'
import pr6i from '../img/tokioschool/pr6i.png'
import pr6v from '../videos/tokioschool/pr6v.mp4'
import pr7i from '../img/tokioschool/pr7i.png'
import pr7v from '../videos/tokioschool/pr7v.mp4'
import pr8i from '../img/tokioschool/pr8i.png'
import pr8v from '../videos/tokioschool/pr8v.mp4'
import pr9i from '../img/tokioschool/pr9i.png'
import pr9v from '../videos/tokioschool/pr9v.mp4'
import pr10i from '../img/tokioschool/pr10i.png'
import pr10v from '../videos/tokioschool/pr10v.mp4'
import pr11i from '../img/tokioschool/pr11i.png'
import pr11v from '../videos/tokioschool/pr11v.mp4'
import pr12i from '../img/tokioschool/pr12i.png'
import pr12v from '../videos/tokioschool/pr12v.mp4'
import tfmi from '../img/tokioschool/tfmi.png'
import tfmf from '../files/TFM.pdf'  

import {MdOutlinePersonOutline} from 'react-icons/md';
import {BsLinkedin, BsFillFileEarmarkPdfFill} from 'react-icons/bs';
 
export const data = [
    {
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
    },
    {
        id: 1,
        titleES:"Dimensional Hike",
        titleEN:"Dimensional Hike",
        ES: "Proyecto en el que actualmente estoy trabajando. Se trata de un juego en 2D y 3D en el que tendrás que ir resolviendo puzzles y pasar entre distintos obstáculos. Mi trabajo consiste en desarrollar toda la programación del juego en base a lo que ya he aprendido en los cursos y mi propia formación personal.",
        EN: "Project I'm currently working on. It is a 2D and 3D game in which you will have to solve puzzles and go through different obstacles. My job is to develop all the programming of the game based on what I have already learned in the courses and my own personal training.",
        img: dh,
        video: dhv
    },
    {
        id: 2,
        titleES:"Building System",
        titleEN:"Building System",
        ES: "Proyecto en el cual construí unas mecánicas de construcción inspiradas en el famoso juego de supervivencia Valheim. Diseñé 3 tipos de estructuras; Muro, Suelo y Escalera. Luego, le añadí a cada estructura las posiciones relativas que quería que tuviera con respecto a las demás, teniendo en cuenta su rotación. Por último, le agregúe un sistema de particulas para cuando destruyes un objeto, unas texturas y edificios para mejorar la ambientación.",
        EN: "Project in which I built some construction mechanics inspired by the famous survival game Valheim. I designed 3 types of structures; Wall, Floor and Ladder. Then, I added to each structure the relative positions I wanted it to have with respect to the others, taking into account its rotation. Finally, I added a particle system for when you destroy an object, some textures and buildings to improve the atmosphere.",
        img: buildingi,
        video: buildingv
    },
    {
        id: 3,
        titleES:"Pong Online",
        titleEN:"Pong Online",
        ES: "Este es mi primer projecto para aprender a gestionar el multijugador en LAN en Unity. En él, aprendí a gestionar las herramientas que te ofrece Unity para el desarrollo del online ('Unity Netcode', 'Networking', 'Lobby', 'Relay'...). Quise recrear un juego sencillo donde pudiera ofrecer una experiencia en LAN teniendo a uno de los usuarios como Host.",
        EN: "This is my first project to learn how to manage LAN multiplayer in Unity. In it, I learned how to manage the tools that Unity offers you for online development ('Unity Netcode', 'Networking', 'Lobby', 'Relay'...). I wanted to recreate a simple game where I could offer a LAN experience having one of the users as Host.",
        img: pongi,
        video: pongv
    },
    {
        id: 4,
        titleES:"Fall Guys Character Controller",
        titleEN:"Fall Guys Character Controller",
        ES: "Proyecto en el cual recreé las mecánicas principales de Fall Guys. También fue la primera vez que animé un personaje y cambié el modelado de uno ya existente. Mecánicas: Doble salto hacia adelante, agarrar a un personaje, cámara 3D circular, diferentes tipos de trampas...",
        EN: "Project in which I recreated the main mechanics of Fall Guys. It was also the first time I animated a character and changed the modeling of an existing one. Mechanics: Double jump forward, grab a character, circular 3D camera, different types of traps...",
        img: fguys,
        video: fallguys
    },
    {
        id: 5,
        titleES:"Procedural Map",
        titleEN:"Procedural Map",
        ES: "En esta parte de la formación, he diseñado diferentes habitaciones que se conectaban entre sí por los cuatro lados. Luego añadí una serie de reglas que hacen que se cree un mapa diferente para cada nivel, pudiendo cambiar los porcentajes de aparición de cada tipo de habitación. Todo esto me sirvió para aprender las bases necesarias y construir así un mapa procedural.",
        EN: "In this part of the training, I designed different rooms that were connected to each other on all four sides. Then I added a series of rules that make a different map is created for each level, being able to change the percentages of appearance of each type of room. All this helped me to learn the necessary basics and build a procedural map.",
        img: procedural,
        video: proceduralv
    },
    {
        id: 6,
        titleES:"Unity Dialogue & Quests: Intermediate C# Game Coding",
        titleEN:"Unity Dialogue & Quests: Intermediate C# Game Coding",
        ES: "Curso certificado donde aprendí a hacer Scriptables Objects, crear una ventana en Unity totalmente desde 0 (en este caso para hacer díalogos), programar un inventario con drag and drop, crear un sistema de guardado dinámico serializable y muy fácilmente extensible. ",
        EN: "Certified course where I learned how to make Scriptable Objects, create a window in Unity completely from 0 (in this case to make dialogs), program an inventory with drag and drop, create a dynamic saving system serializable and very easily extensible. ",
        img: dialogue,
        video: dialoguev
    },
    {
        id: 7,
        titleES:"Create an RPG Game in Unity",
        titleEN:"Create an RPG Game in Unity",
        ES: "En este curso aprendí a crear un juego entero de RPG. Durante el curso, he utilizado modelados de contenido descargable y ello me ayudó a organizar el proyecto y programar sus funcionalidades. Aprendía a diseñar un nivel con terreno, a tener en cuenta el rendimiento de la iluminación, al sistema de combate de un RPG, etc.",
        EN: "In this course I learned how to create an entire RPG game. During the course, I used downloadable content modeling and this helped me to organize the project and program its functionalities. I learned how to design a level with terrain, how to take into account the lighting performance, the combat system of an RPG, etc.",
        img: rpg,
        video: rpgv
    },
    {
        id: 8,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Introducción",
        subtitleEN:"Introduction",
        ES: "He decidido realizar este Master de programación de videojuegos en la escuela online Tokio School para afianzar los conocimientos básicos que he ido adquiriendo en mi carrera autodidacta, por eso a partir de este punto, voy a presentar las prácticas que se me han ido asignando a lo largo del curso.",
        EN: "I have decided to take this Master's degree in video game programming at Tokio School online school to consolidate the basic knowledge I have been acquiring in my self-taught career, so from this point on, I will present the practices that have been assigned to me throughout the course.",
        img: tokio,
        video: tokio
    },
    {
        id: 9,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 1",
        subtitleEN:"Activity 1",
        ES: "Como viene siendo habitual, el primer proyecto es recrear el mítico videojuego Pong. En esta práctica, se me pidió que el juego tuviera power ups en caso de que la bola impacte en alguno, el último jugador en tocar la pelota, es el que recibirá el poder. Posee una IA mínima para que el segundo jugador persiga la altura de la pelota.",
        EN: "As usual, the first project is to recreate the mythical video game Pong. In this practice, I was asked for the game to have power ups in case the ball hits any of them, the last player to touch the ball, is the one who will receive the power. It has a minimal AI for the second player to chase the height of the ball.",
        img: pr1i,
        video: pr1v
    },
    {
        id: 10,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 2",
        subtitleEN:"Activity 2",
        ES: "El objetivo de esta práctica, era adquirir el conocimiento de las máscaras en Unity y un ejemplo de ello es en la manera que aparecen los topos. Este es el juego de Mole un clásico de las ferias. El juego consiste en clicar el mayor número de topos en un tiempo.",
        EN: "The aim of this practice was to acquire knowledge of the masks in Unity and an example of this is the way the moles appear. This is the Mole game, a classic of the fairs. The game consists of clicking as many moles as possible in a given time.",
        img: pr2i,
        video: pr2v
    },
    {
        id: 11,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 3",
        subtitleEN:"Activity 3",
        ES: "El enunciado de esta práctica era hacer un Infinity Runner y pensé en hacerlo en 2D para aprender sobre los Tilemaps. Como quería que el personaje tuviera un poco más de movimiento, es el personaje el que se mueve y a medida que avanza se va generando más mapa por delante de él.",
        EN: "The brief for this practice was to make an Infinity Runner and I thought I would do it in 2D to learn about Tilemaps. As I wanted the character to have a bit more movement, it is the character that moves and as he moves forward more map is generated in front of him.",
        img: pr3i,
        video: pr3v
    },
    {
        id: 12,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 4",
        subtitleEN:"Activity 4",
        ES: "Este proyecto se basa en la mecánica tipo Clicker, cada vez que clicas en el enemigo, le hace daño y al ganar, recibes una recompensa que mejora las estadisticas de daño defensa o vida. Tambíen le añadí una manera de que el jugador pueda curarse clicando en su personaje.",
        EN: "This project is based on the Clicker mechanic, every time you click on the enemy, it does damage and when you win, you get a reward that improves the damage, defence or health stats. I also added a way for the player to heal himself by clicking on his character.",
        img: pr4i,
        video: pr4v
    },
    {
        id: 13,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual realityActivity 5",
        subtitleES:"Práctica 5",
        subtitleEN:"Activity 5",
        ES: "En este punto del curso se nos insistió un poco más en las físicas del movimiento del jugador, intentando recrear la sensación de movimiento de los juegos de Mario Bros; al pulsar más tiempo el botón de saltar puedes saltar más alto, el movimiento de aceleración del personaje, etc.",
        EN: "At this point in the course, the physics of player movement was emphasised a bit more, trying to recreate the feeling of movement of the Mario Bros games; by pressing the jump button longer, you can jump higher, the acceleration movement of the character, etc.",
        img: pr5i,
        video: pr5v
    },
    {
        id: 14,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 6",
        subtitleEN:"Activity 6",
        ES: "Para esta práctica, consistía en hacer el clásico juego de naves, donde iban llegando oleadas de enemigos y obstaculos, con la peculiaridad que podían aparecer power ups que al se impactados por las balas del jugador, este se ganada el poder. Está compuesto de 3 rondas y un ranking de puntuaciones local.",
        EN: "For this practice, it consisted of playing the classic ship game, where waves of enemies and obstacles were arriving, with the peculiarity that power ups could appear and when they were hit by the player's bullets, the player would gain power. It is composed of 3 rounds and a local ranking of scores.",
        img: pr6i,
        video: pr6v
    },
    {
        id: 15,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 7",
        subtitleEN:"Activity 7",
        ES: "Este proyecto fue una reconstrucción de la práctica 5, ya que nos pedía hacer un metroidvania con sistema de combate y objetos coleccionables en el escenario. Utilicé una máquina de estados para el control de la IA y perfeccioné el movimiento del jugador con respecto a la práctica anterior e hice uso del asset Cinemachine para el control de la cámara.",
        EN: "This project was a reconstruction of practice 5, as it asked us to make a metroidvania with a combat system and collectibles on the stage. I used a state machine for AI control and improved the player's movement from the previous practice and made use of the Cinemachine asset for camera control.",
        img: pr7i,
        video: pr7v
    },
    {
        id: 16,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 8",
        subtitleEN:"Activity 8",
        ES: "Como se puede observar consistía en una práctica sencilla para familiarizarse con los controles de VR para simular un museo. Le añadí el asset DoTween para el traslado de la posición del jugador y la levitación de las esferas del escenario.",
        EN: "As you can see it was a simple practice to get familiar with the VR controls to simulate a museum. I added the DoTween asset for moving the player's position and levitating the stage spheres.",
        img: pr8i,
        video: pr8v
    },
    {
        id: 17,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 9",
        subtitleEN:"Activity 9",
        ES: "Esta práctica se basada en crear un First Person Shooter pero con los controles de VR. Hice uso de Raycasts para detectar a los enemigos y matarlos, iban apareciendo en ciertos puntos del mapa y con la ayuda del NavMesh Agent irían avanzando hacía el jugador.",
        EN: "This practice was based on creating a First Person Shooter but with VR controls. I made use of Raycasts to detect the enemies and kill them, they would appear at certain points on the map and with the help of the NavMesh Agent they would advance towards the player.",
        img: pr9i,
        video: pr9v
    },
    {
        id: 18,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 10",
        subtitleEN:"Activity 10",
        ES: "Aquí, nos encargaron hacer uso de la tecnología de Vuforia para detectar Targets y crear una aplicación en base a esa tecnología, para recrear un sistema de moléculas y que al interactuar con los múltiples targets interaccionaran entre ellos.",
        EN: "Here, we were commissioned to make use of Vuforia's technology to detect Targets and create an application based on that technology, to recreate a system of molecules that interact with multiple targets and interact with each other.",
        img: pr10i,
        video: pr10v
    },
    {
        id: 19,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 11",
        subtitleEN:"Activity 11",
        ES: "Dejando atrás el sector VR, este proyecto consistía es hacer un First Person Shooter, haciendo uso del New Input System de Unity para los controles, hice un shooter a modo de circuito a contrarreloj con diferentes armas, donde tienes que disparas a todos los objetivos. Como contramedida, al correr o saltar se gasta la barra de estamina del jugador.\n También, añadí algunos patrones de diseño como Singleton para las clases principales y Object Pool para las balas de las armas.",
        EN: "Leaving the VR sector behind, this project consisted of making a First Person Shooter, making use of Unity's New Input System for the controls, I made a circuit shooter against the clock with different weapons, where you have to shoot all the targets. As a countermeasure, running or jumping uses up the player's stamina bar. Also, I added some design patterns like Singleton for the main classes and Object Pool for the weapon bullets.",
        img: pr11i,
        video: pr11v
    },
    {
        id: 20,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Práctica 12",
        subtitleEN:"Activity 12",
        ES: "En esta última práctica, se nos asignó hacer una aplicación sencilla para móvil y así poder conocer las funciones básicas de Unity en los controles de los móviles. El proyecto es un réplica del Flappy Bird, donde al pulsar consigues que el personaje se eleve para esquibar las tuberías.",
        EN: "In this last practice, we were assigned to make a simple mobile application to learn the basic functions of Unity in mobile controls. The project is a replica of Flappy Bird, where tapping makes the character rise up to dodge the pipes.",
        img: pr12i,
        video: pr12v
    },
    {
        id: 21,
        titleES:"Master en programación de videojuegos y realidad virtual",
        titleEN:"Master in video game programming and virtual reality",
        subtitleES:"Trabajo final de Master",
        subtitleEN:"Final Master's project",
        ES: "Por último, este es mi trabajo final de master, nos dieron 3 temas sobre los que poder trabajar y decidí hacer un juego en 3D en primera persona para aumentar mis conocimientos en 3D ya que no lo había hecho mucho durante el curso.\n El juego consiste en hacer uso de las diferentes armas, que se van desbloqueando a medida que pasas al siguiente nivel para completar el juego en el menor tiempo posible y guardar tu puntuación final en una base de datos online en Azure.\n " +
        "He usado todas las herramientas aprendidas a lo largo del curso y profundizado en algunas más, las más destacadas podrían ser: la máquina de estados para la IA de los enemigos, el uso de New Input System para el control del personaje, el postprocessing, scriptable objects para la guardar los datos de las armas, cinemachine y patrones de diseño como Singleton o estructurando el código con los Principios SOLID." +
        "Para mayor detalle de los recursos usados en el proyecto, se pueden ver en este documento: ",
        EN: "Finally, this is my final master work, we were given 3 topics to work on and I decided to make a first person 3D game to increase my 3D knowledge as I hadn't done much during the course. The game consists of using the different weapons, which are unlocked as you go to the next level to complete the game in the shortest time possible and save your final score in an online database in Azure.\n " +
        "I have used all the tools learnt along the course and deepened some more, the most outstanding ones could be: the state machine for enemy AI, the use of New Input System for character control, postprocessing, scriptable objects for saving weapon data, cinemachine and design patterns like Singleton or structuring the code with SOLID Principles" +
        "For more details on the resources used in the project, see this document: ",
        file: <a href={tfmf} title="The Quantum Challenge" download><BsFillFileEarmarkPdfFill className='w-[20px] h-[20px]'></BsFillFileEarmarkPdfFill></a>,
        img: tfmi,
        video: "https://youtu.be/JbW8hk-s7dM"
    }
]; 
