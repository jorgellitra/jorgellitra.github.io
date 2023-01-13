import './App.css';
import {MdChevronLeft, MdChevronRight, MdOutlinePersonOutline} from 'react-icons/md';
import pong from './img/pong.png' 
import yo from './img/yo.jpg' 

const data = [{
  id: 1,
  title: "Sobre mi",
  text: "He trabajado durante 3 años, hasta el 2022 como desarrollador web y de aplicaciones pero desde que hice unas practicas de empresa" +
  " de realidad virtual en Unity, se me había quedado una espinita clavada sobre el desarrollo de videojuegos, así que en ese mismo año decicí " +
  "dejar atrás la programación web y dedicarme en exclusiva a desarrollar videojuegos en Unity, he hecho esta página web para mostrarte un poco mi camino",
  icon: <MdOutlinePersonOutline className='w-[220px] h-[150px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' ></MdOutlinePersonOutline> 
},{
  id: 2,
  title:"",
  text: "",
  img: pong
},{
  id: 3,
  title:"",
  text: "",
  img: "ddd"
},{
  id: 4,
  title:"",
  text: "",
  img: "fff"
},{
  id: 5,
  title:"",
  text: "",
  img: "ggg"
},{
  id: 6,
  title:"",
  text: "",
  img: "hhh"
}];

function App() {

  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - window.innerWidth;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + window.innerWidth;
  };

  const contentSlider = data.map((item) => {

    let content = item.icon ?? <img key={item.id} className='w-[220px] h-[150px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' 
    alt='' src={item.img} />

    return <div className='w-full h-full inline-block' >{content}</div> 
  })

  return (
    <div className="App">   
      <div className='relative flex items-center'>
        <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideLeft}></MdChevronLeft>
        <div id='slider' className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
          { contentSlider }
        </div>
        <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' size={40} onClick={slideRight}></MdChevronRight>
      </div>
    </div>
  );
}

export default App;
