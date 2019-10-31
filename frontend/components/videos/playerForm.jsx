import React from 'react';
import { Link, Redirect} from 'react-router-dom';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume: 1,
            time: '00:00',
            playing: true,
        };


       
    }

    componentDidMount(){
        // let controlsToggleTimer;
        const backToBrowse = document.getElementById("back-to-browse");
        const backButton = document.getElementById("back-arrow-font");





        const showBack = () => {
            backButton.style.opacity = "1.0";
            backToBrowse.style.opacity = '1.0'
        }

        const hideBack = () => {
            backButton.style.opacity = "0.0";
            backToBrowse.style.opacity = '0.0'
        }

        backToBrowse.addEventListener("mouseover", showBack)
        backToBrowse.addEventListener("mouseout", hideBack)
    }



    render() {
       
        return (
            <div className='video-player'>
                <Link to={"/videos"}>
                    <div id="back-to-browse" className="back-to-browse">
                        <i className="fas fa-arrow-left fa-2x" id="back-arrow-icon"></i>
                        <h1 id="back-arrow-font" className="back-arrow-font">Back to Browse</h1>
                    </div>
                </Link>
                
                <br/>
                <br/>
                <h1>Hi</h1>
            </div>

        )
    }

}
export default PlayerForm;