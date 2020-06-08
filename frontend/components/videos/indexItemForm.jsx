import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { deleteList } from '../../util/listUtil';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false, open: false, created: false };
        this.createList = this.createList.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
       

    }


    
    componentDidMount(){
        let vid = this.props.video;
      
        if(this.props.lists[vid.id]){
            this.setState({created: true})
        }
        let video_li = document.getElementById(`video-li ${vid.id}`);
        let arrow = document.getElementById(`movie-arrow ${vid.id}`);
        let check = document.getElementById(`${vid.id}-check`)
        let user = this.props.user
        // debugger


        arrow.style.display = "none"
        video_li.addEventListener("mouseover", ()=> {
            arrow.style.display = "inline-block";
            arrow.style.position = "absolute";
            arrow.style.marginTop = '125px';
            arrow.style.marginLeft = '45%';


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
    duplicateArray(array) {
        // deep dupes objects

        let ans = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            ans.push(newObject);
        }
        return ans;
    }




    createList(video_id){
        if(this.state.created){
           
           
            let list = this.props.list[video_id]
           
            this.props.deleteList({id: list.id, video_id: list.video_id, user_id: list.user_id}).then(() => this.setState({created: false}))
            
        } else {
       
            this.props.createList({user_id: this.props.user.id, video_id}).then(() => this.setState({created: true}))
        }
        
        // alert('button clicked')

    }





    render() {
        let vid = this.props.video
        let plusOrCheck;
        if(this.state.created){
            plusOrCheck  = 'fas fa-check index-check';
        } else {
            plusOrCheck = 'fas fa-plus index-check'
        }
        plusOrCheck
        return (
            <li  className='index-item' id = {`video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
                <div className='arrow-div'>
                    <i id={`movie-arrow ${vid.id}`} className="movie-arrow fas fa-caret-down fa-2x"></i>
                    <div id='index-button-background'><i id={`${vid.id}-check`} className={plusOrCheck}></i></div>
                </div>


            </li>

        )
    }

}
export default IndexItemForm;