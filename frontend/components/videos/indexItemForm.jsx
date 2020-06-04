import React from 'react';
import { Link } from 'react-router-dom';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false };
       
    }

   

    componentDidMount(){
      
        let video_li = document.getElementById("video-li");
        
        const togglePlay = () => {
                // debugger
                video_li.play();
                this.setState({ playing: true })
            }
        

        const togglePause = () => {
            video_li.pause();
            this.setState({ playing: false })
        }

        video_li.addEventListener("mouseenter", togglePlay)
        video_li.addEventListener("mouseleave", togglePause)
        
    }

   







    render() {
        let vid = this.props.video
        
        // debugger
        return (
            <li className='index-item' key={vid.id} >
                {/* <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link> */}
               <Link to={`/player/${vid.id}`}><video ref="player" id="video-li" className="video-li" src={vid.video_link} poster={vid.image_link} preload="meta" loop ></video></Link> 
            </li>

        )
    }

}
export default IndexItemForm;