import React from 'react';
import { Link } from 'react-router-dom';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null };
       
    }

    componentDidMount(){

        // this.props.getVideos().then(() => this.setState({loaded: true}))
        const video_li = document.getElementById("video-li");

        const play = () => {
            let vid = this.props.video;
            <video ref="player" id="video-li" className="video-li" src={vid.video_link} poster={vid.image_link} preload="auto" loop autoPlay></video>
        }
        video_li.addEventListener("mouseover", play)
    }






    render() {
        let vid = this.props.video
        // debugger
        return (
            <li className='index-item' key={vid.id} id= 'video-li'>
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
            </li>

        )
    }

}
export default IndexItemForm;