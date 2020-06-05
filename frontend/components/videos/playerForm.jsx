import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Player } from 'video-react';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume: 1,
            time: '00:00',
            playing: true,
            duration: null,
            seek: 0,
            loaded: null
        };


        this.toggleVolume = this.toggleVolume.bind(this);
        this.toggleMute = this.toggleMute.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
        this.updateTime = this.updateTime.bind(this);
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.keyHandler = this.keyHandler.bind(this);
    }

    keyHandler(e){
        let actualVideoFive = document.getElementById("video-player");
  
        if(e.keyCode === 109){
            if(actualVideoFive.muted){
                actualVideoFive.muted = false;
                this.setState({ volume: 1 });
            } else {
                actualVideoFive.muted = true;
                this.setState({ volume: 0 });
            }
        }

        if(e.keyCode === 32){
            let actualVideoFive = document.getElementById("video-player")
            if (this.state.playing === true) {
                actualVideoFive.pause();
                this.setState({ playing: false })
            } else {
                actualVideoFive.play();
                this.setState({ playing: true })
            }
        }
       
    }

    componentDidMount(){
        let controlsToggleTimer;
        this.props.getVideos().then( () => this.setState({loaded: true}))
        const backToBrowse = document.getElementById("back-to-browse");
        const backButton = document.getElementById("back-arrow-font");
        const rewindButton = document.getElementById("reverse-button");
        const fastForwardButton = document.getElementById("forward-button");
        const playPauseButton = document.getElementById("play-button");
        const volumeBar = document.getElementById("volume-bar");
        const volumeButton = document.getElementById("controls-volume-button"); 
        document.addEventListener('keypress', this.keyHandler, false)
        const bottom_row = document.getElementById("bottom-row"); 
     
        


        const showBack = () => {
            backButton.style.opacity = "1.0";
            backToBrowse.style.opacity = '1.0';
            playPauseButton.style.color = "white";
        }

        const hideBack = () => {
            backButton.style.opacity = "0.0";
            backToBrowse.style.opacity = '0.0';
            playPauseButton.style.color = "white";
        }

        backToBrowse.addEventListener("mouseover", showBack)
        backToBrowse.addEventListener("mouseout", hideBack)

        rewindButton.addEventListener("mouseover", () => {
            rewindButton.style.transform = "scale(1.2)";
            playPauseButton.style.color = "white";
        })

        rewindButton.addEventListener("mouseout", () => {
            rewindButton.style.transform = "scale(1.0)";
            playPauseButton.style.color = "white";
        })

        fastForwardButton.addEventListener("mouseover", () => {
            fastForwardButton.style.transform = "scale(1.2)";
            playPauseButton.style.color = "white";

        })

        fastForwardButton.addEventListener("mouseout", () => {
            fastForwardButton.style.transform = "scale(1.0)";
            playPauseButton.style.color = "white";

        })

        window.addEventListener("mousemove", () => {
           
            bottom_row.style.opacity = "1.0"
            
            setTimeout(function(){
                bottom_row.style.opacity = "0";
            }, 3000);
        })

     

    }

    toggleFullScreen() {
        let actualVideoTwo = document.getElementById("video-player");
        return () => {
            if (actualVideoTwo.requestFullscreen) {
                actualVideoTwo.requestFullscreen();
            } else if (actualVideoTwo.webkitRequestFullScreen) {
                actualVideoTwo.webkitRequestFullScreen();
            } else if (actualVideoTwo.mozRequestFullScreen) {
                actualVideoTwo.mozRequestFullScreen();
            }
        };
    }


    toggleMute() {
        let actualVideoThree = document.getElementById("video-player");
        if (actualVideoThree.muted) {
            actualVideoThree.muted = false;
            this.setState({ volume: 1 });
        } else {
            actualVideoThree.muted = true;
            this.setState({ volume: 0 });
        }
    }

    toggleVolume(e) {
        let actualVideoFour = document.getElementById("video-player");
        e.preventDefault();
        let change = parseFloat(e.target.value);
        actualVideoFour.volume = change;
        this.setState({ volume: change })
    }

    updateTime() {
        const timer = this.state.duration - Math.floor(this.state.seek);
        let minutes = Math.floor(timer / 60)
        let seconds = timer % 60;

        if (minutes < 10) {
            minutes = `0${minutes}`;
        }

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        const newTime = `${minutes}:${seconds}`
        this.setState({ time: newTime });
    }

    togglePlay() {
        let actualVideo = document.getElementById("video-player")
        if (this.state.playing === true) {
            actualVideo.pause();
            this.setState({ playing: false })
        } else {
            actualVideo.play();
            this.setState({ playing: true })
        }
    }



    render() {
        
        // if(!this.state.loaded){
        //     return null;
        // }
        let volumeButtonRender;

        if (this.state.volume > 0.6) {
            volumeButtonRender = <i className="vol fas fa-volume-up" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else if (this.state.volume > 0.3 && this.state.volume <= 0.6) {
            volumeButtonRender = <i className="voltwo fas fa-volume-down" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else if (this.state.volume > 0 && this.state.volume <= 0.3) {
            volumeButtonRender = <i className="voltwo fas fa-volume-off" id="controls-volume-button" onClick={this.toggleMute}></i>
        } else {
            volumeButtonRender = <i className="vol fas fa-volume-mute" id="controls-volume-button" onClick={this.toggleMute}></i>
        }
        let playButtonRender;
        if (this.state.playing === true) {
            playButtonRender = <i className="fas fa-pause" id="play-button" onClick={this.togglePlay}></i>
        } else if (this.state.playing === false) {
            playButtonRender = <i className="fas fa-play" id="play-button" onClick={this.togglePlay} ></i>
        }
       
        const vid = this.props.video
       

        return (
            
            <div className='video-player-div'>
                <div className = 'video-player-div-top'>
                    <Link to={"/videos"}>
                        <div id="back-to-browse" className="back-to-browse">
                            <i className="fas fa-arrow-left fa-2x" id="back-arrow-icon"></i>
                            <h1 id="back-arrow-font" className="back-arrow-font">Back to Browse</h1>
                            
                        </div>
                    </Link> 
                </div>
                
                
                <div className= 'video-player-div-bottom'>
                    <video ref="player" id="video-player" className="video-player" src={vid.video_link} poster={vid.image_link} preload="auto" loop autoPlay></video>
                    <div  id='bottom-row' className='bottom-row'>
                            <h2>{playButtonRender}</h2>
                            <img id="reverse-button" className="reverse-button" src={window.forward_arrow} />
                            <img id="forward-button" className="forward-button" src={window.back_arrow} />
                            <div>
                                <input type="range" id="volume-bar" min="0" max="1" step="0.01" onChange={this.toggleVolume} value={this.state.volume} />
                                {volumeButtonRender}
                            </div>
                            <i className="fas fa-compress" id="screen-toggle-button" onClick={this.toggleFullScreen()}></i> 
                
                    </div>
                </div>
                

            </div>
        )
    }

}
export default PlayerForm;