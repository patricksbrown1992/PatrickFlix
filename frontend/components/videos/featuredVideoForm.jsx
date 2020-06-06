import React from "react";
import { Link } from "react-router-dom";

class FeaturedVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = { volume: 1, play: true, loaded: false, vid: null}
        this.volumeToggle = this.volumeToggle.bind(this);
        this.togglePlay = this.togglePlay.bind(this);
       
        // this.handleFeatured = this.handleFeatured.bind(this);

    }

    // handleFeatured () {
    //     if (window.scrollY > 100) {
    //         featured.muted = true;
    //         featured.pause();
    //         this.setState({ volume: 0 })
    //     } else if (window.scrollY === 0) {
    //         featured.muted = false;
    //         featured.play()
    //         this.setState({ volume: 1 });
    //     }
    // }

    // componentDidMount() {
    //     let featured = document.getElementById('featured-video');
    //     $(window).one("scroll", ()=> {
    //         featured.muted = false
    //     })       
      


    // }

   
        // let vid = this.props.videos[10];
        // this.setState({vid: vid})
  
        // this.setState({loaded: true}, () => vid.play())
        // vid.play();
       
    // }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.handleFeatured);
    // }
   togglePlay(){
    let featured = document.getElementById('featured-video');
    if(this.state.play){
        featured.pause();
        this.setState({play: false})
    } else {
        featured.play();
        this.setState({play: true})
    }
   
   }
    
    volumeToggle() {

        let featured = document.getElementById('featured-video')
        if (featured.muted) {
            featured.muted = false;
            this.setState( { volume: 1 } );
        } else {
            featured.muted = true;
            this.setState( { volume: 0 } );
        }
    }

 
    render() {

       
       
        let chooseButton;
        if(this.state.volume === 0) {
            chooseButton = <i onClick= {this.volumeToggle}className="fas fa-volume-mute fa-1x"></i>
        } else if(this.state.volume === 1) {
            chooseButton = <i onClick= {this.volumeToggle} className="fas fa-volume-up fa-1x"></i>
        }
        // let movie = this.state.vid ?  
        
        // return null
        
     
        
        
        return (
            <div className="featured-video-div">
                
                <video id="featured-video" className="featured-video" src={this.props.videos[10].video_link} autoPlay loop ></video>
                <div className= 'featured-video-title-div'>
                    <h1 className = "featured-video-h1">{this.props.videos[10].title}</h1>
                    <button className='aquaman-button'><Link to={`player/${this.props.videos[10].id}`}><i className="fas fa-play" id="play-button"></i>  Play</Link></button>
                </div>
                <div className='featured-mute-div'>
                    {chooseButton}
                </div>
                
                
                
               
    
                
            </div> 
        )
    }  
};

export default FeaturedVideo;


