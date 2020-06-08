import React from 'react';
import { Link, Redirect} from 'react-router-dom';


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
        this.changeTime = this.changeTime.bind(this);
        this.toggleSeek = this.toggleSeek.bind(this);
        this.updateSeek = this.updateSeek.bind(this);
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

    componentWillUnmount() {
        clearInterval(this.seekCheck)
        clearInterval(this.timeCheck)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.video_id !== prevProps.match.params.video_id) {
            this.props.getVideos();
        }
    }
  
    componentDidMount(){
        let controlsToggleTimer;
        
        this.props.getVideos()
        const backToBrowse = document.getElementById("back-to-browse");
        const backButton = document.getElementById("back-arrow-font");
        const rewindButton = document.getElementById("reverse-button");
        const fastForwardButton = document.getElementById("forward-button");
        const playButton = document.getElementById("play-button");
        const volumeBar = document.getElementById("volume-bar");
        const volumeButton = document.getElementById("controls-volume-button"); 
        const screenToggleButton = document.getElementById("screen-toggle-button");
        const bottom_row = document.getElementById("bottom-row"); 
        const video = document.getElementById("video-player");
        const scrollBar = document.getElementById("scroll-bar");
        const videoTime = document.getElementById("movie-duration");
        
        this.seekCheck = setInterval(this.updateSeek, 1000);
        this.timeCheck = setInterval(this.updateTime, 1000);
        let volumeToggleTimer;
        document.addEventListener('keypress', this.keyHandler, false)
        video.addEventListener('loadedmetadata', () => {
            this.setState({duration: Math.floor(video.duration)})
        });

            volumeButton.addEventListener("mouseout", () => {
                volumeToggleTimer = setTimeout(() => {
                    // volumeBar.style.display = "none";
                    volumeButton.style.transform = "scale(1.0)";
                    scrollBar.style.opacity = "1.0";
                    videoTime.style.opacity = "1.0"
                    playButton.style.color = "white";
                    screenToggleButton.style.color = "white";
                }, 1000);
            })

            volumeButton.addEventListener("mouseover", () => {
                clearTimeout(volumeToggleTimer);
                // volumeBar.style.display = "block";
                volumeButton.style.transform = "scale(1.2)";
                scrollBar.style.opacity = "0.0";
                videoTime.style.opacity = "0.0"
                playButton.style.color = "grey";
                screenToggleButton.style.color = "grey";
            })
    


        const showBack = () => {
            backButton.style.opacity = "1.0";
            backToBrowse.style.opacity = '1.0';
            playButton.style.color = "white";
        }

        scrollBar.addEventListener("mouseover", () => {
            scrollBar.style.height = "8px";
            playButton.style.color = "grey";
            screenToggleButton.style.color = "grey";
        })

        scrollBar.addEventListener("mouseout", () => {
            scrollBar.style.height = "5px";
            playButton.style.color = "white";
            screenToggleButton.style.color = "white";
        })

        const hideBack = () => {
            backButton.style.opacity = "0.0";
            backToBrowse.style.opacity = '0.0';
            playButton.style.color = "white";
        }

        // backToBrowse.addEventListener("mouseover", showBack)
        // backToBrowse.addEventListener("mouseout", hideBack)

        rewindButton.addEventListener("mouseover", () => {
            rewindButton.style.transform = "scale(1.2)";
            playButton.style.color = "white";
        })

        rewindButton.addEventListener("mouseout", () => {
            rewindButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";
        })

        fastForwardButton.addEventListener("mouseover", () => {
            fastForwardButton.style.transform = "scale(1.2)";
            playButton.style.color = "white";

        })

        fastForwardButton.addEventListener("mouseout", () => {
            fastForwardButton.style.transform = "scale(1.0)";
            playButton.style.color = "white";

        })

        window.addEventListener("mousemove", () => {
           
            bottom_row.style.opacity = "1.0"
            backToBrowse.style.opacity = "1.0"
            setTimeout(function(){
                bottom_row.style.opacity = "0";
                backToBrowse.style.opacity = "0"
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


    changeTime(change) {
        let actualVideo = document.getElementById("video-player") 
        return () => {
            actualVideo.currentTime += change;
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

    updateSeek() {
        const actualVideoSix = document.getElementById("video-player");  
        this.setState({ seek: actualVideoSix.currentTime });
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

    toggleSeek(e) {
        const actualVideoFive = document.getElementById("video-player");  
        const change = actualVideoFive.duration * (e.target.value / this.state.duration);
        actualVideoFive.currentTime = change;
        this.setState({ seek: change });
    }



    render() {
        
      
        
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
        let vid;
        this.props.video ? vid = this.props.video : vid = this.props.watching
        

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
                        <div className="navigation-scroll-bar-container">
                            <input id="scroll-bar" type="range" min="0" max={this.state.duration} step="1" value={Math.floor(this.state.seek)} onChange={this.toggleSeek}/>
                            <h1 className="movie-duration" id="movie-duration">{this.state.time}</h1>
                        </div>
                        <div id='controls'>
                        <h2>{playButtonRender}</h2>
                            <img onClick={this.changeTime(-10)} id="reverse-button" className="reverse-button" src={window.forward_arrow} />
                            <img onClick={this.changeTime(10)} id="forward-button" className="forward-button" src={window.back_arrow} />
                            <h4 className='featured-video-h4'>{vid.title}</h4>
                            <div>
                                <input type="range" id="volume-bar" min="0" max="1" step="0.01" onChange={this.toggleVolume} value={this.state.volume} />
                                {volumeButtonRender}
                            </div>
                            <i className="fas fa-compress" id="screen-toggle-button" onClick={this.toggleFullScreen()}></i> 
                        </div>
                            
                
                    </div>
                </div>
                

            </div>
        )
    }

}
export default PlayerForm;

