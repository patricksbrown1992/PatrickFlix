import React from 'react';
import { Link } from 'react-router-dom';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false };
       
    }

   

    componentDidMount(){
        
        let video_li = document.getElementById(`video-li ${this.props.video.id}`);
        let arrow = document.getElementById(`movie-arrow ${this.props.video.id}`);  
        debugger
        
        arrow.style.display = "none"
        video_li.addEventListener("mouseover", ()=> {
            arrow.style.display = "inline-block"
            arrow.style.position = "absolute"
        })
        
        video_li.addEventListener("mouseout", ()=> {
            arrow.style.display = "none"
        })

        arrow.addEventListener("click", () => {
            alert(`You clicked ${this.props.video.id} arrow`)
        })
        

        
   
        
    }

   







    render() {
        let vid = this.props.video
        
        // debugger
        return (
            <li onMouseEnter={() => {
                
            }} className='index-item' id = {`video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
               {/* <Link to={`/player/${vid.id}`}><video ref="player" id="video-li" className="video-li" src={vid.video_link} poster={vid.image_link} preload="meta" loop ></video></Link>  */}
               <i id={`movie-arrow ${vid.id}`} className="fas fa-caret-down fa-2x movie-arrow"></i>
            </li>

        )
    }

}
export default IndexItemForm;