import React from 'react'; 
import ReactPlayer from 'react-player'; 
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { data } from './Data'
 
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
         
        console.log(item.img)
        if (item.video != undefined && !item.video?.includes("png")) {
            console.log(item.video)
            content = <ReactPlayer url={item.video} controls={true} volume={0} muted={true}/>
        }
            
        return <Slide index={item.id} key={item.id} >
            <div className='flex justify-center m-4'>
                <div className="w-full md:w-1/3 flex flex-col justify-center"> 
                    <div className='container-media' >
                        {content}
                    </div>
                </div> 
                <div className="w-full p-5 md:w-1/3 ml-3 flex flex-col justify-start"> 
                    <h1 className='text-2xl font-bold' >{item["title" + this.state.lang]}</h1>
                    <h3 className='text-xl' >{item["subtitle" + this.state.lang]}</h3>
                        <span className='mt-5 break-normal ' >
                            {item[this.state.lang]}
                        </span>
                    <div className="w-full mt-3 flex justify-center space-x-2">  
                        {item.cv}
                        {item.cve}
                        {item.file}
                        {item.linkdn}
                    </div>  
                </div> 
            </div>
        </Slide> 
        })
        
        const content = data.map((item) => {
            let result = item.icon ??  <img key={item.id} alt='' src={item.img} />;
        
            return (<Dot className='dot-button' slide={item.id}>{result}</Dot>);
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
                        naturalSlideWidth={50}
                        naturalSlideHeight={50}
                        isIntrinsicHeight={true} 
                        totalSlides={contentSlider.length}
                    >
                    <Slider >
                        {contentSlider}
                    </Slider> 
                    <div className='slider-container'>
                        {content}
                    </div>
                    </CarouselProvider> 
                </div> 
            </div>
        );
    }
  }