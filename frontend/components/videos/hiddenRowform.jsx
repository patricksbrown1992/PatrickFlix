import React from 'react';
import { Link } from 'react-router-dom';

class DetailRowForm extends React.Component {
    constructor(props) {
        super(props);

        

    }

  




   
    render() {
       
        let vid = this.props.vid
        return (
            
            <div id ={`detail-row-show-${1}`} className='detail-row-show'> 
                <div className='left-show-div'><Link to={`/player/${vid.id}`}>
                    <i className="fas fa-play" id="play-button-detail"></i></Link>
                    <h3 className= 'featured-video-h3'>{vid.title}({vid.year}) - {vid.description}</h3>
                </div>
                <img src={vid.image_link} alt=""/>
            </div>
            
                
     
        )
    }

}
export default DetailRowForm;