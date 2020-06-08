import React from 'react';
import { Link } from 'react-router-dom';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false, open: false };
        this.createList = this.createList.bind(this);
       
    }

   

    componentDidMount(){
        let vid = this.props.video;
        let video_li = document.getElementById(`video-li ${vid.id}`);
        let arrow = document.getElementById(`movie-arrow ${vid.id}`);  
        let check = document.getElementById(`${vid.id}-check`)
        let user = this.props.user
        debugger

        
        arrow.style.display = "none"
        video_li.addEventListener("mouseover", ()=> {
            arrow.style.display = "inline-block";
            arrow.style.position = "absolute";
            
            
        })

        video_li.addEventListener("mouseenter", ()=> {
            if(this.props.modal !== null){
                this.props.receiveModal(this.props.index)
            }
            
            
        })

        check.addEventListener("click", () => {
            this.createList(vid.id) 
        })
       
        video_li.addEventListener("mouseout", ()=> {
            arrow.style.display = "none"
        })

        arrow.addEventListener("click", () => {
            
            if(this.props.modal == null){
                this.props.receiveModal(this.props.index)
            } else {
                this.props.receiveModal(null)
            }
            
           
        })


        

        
   
        
    }

   

    createList(video_id){
        this.props.createList({user_id: this.props.user, video_id})
        // alert('button clicked')

    }





    render() {
        let vid = this.props.video
      
        
        return (
            <li  className='index-item' id = {`video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
                <div className='arrow-div'>
                    <i id={`movie-arrow ${vid.id}`} className="fas fa-caret-down fa-2x movie-arrow"></i>
                    <i id={`${vid.id}-check`} className="fas fa-check"></i>
                </div>
               
               
            </li>

        )
    }

}
export default IndexItemForm;