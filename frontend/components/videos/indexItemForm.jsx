import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { deleteList } from '../../util/listUtil';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false, open: false, created: false };
        this.updateList = this.updateList.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);


    }



    componentDidMount(){
        let vid = this.props.video;


        let video_li = document.getElementById(`video-li ${vid.id}`);
        let arrow = document.getElementById(`movie-arrow ${vid.id}`);
        
      
        // let add_remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        // let title = document.getElementById(`${vid.id}-index-item-title`);
     
        // arrow.style.display = "none";
        // add_remove_div.style.opacity = '0';
        // title.style.opacity = '0';




        video_li.addEventListener("mouseenter", ()=> {
            if(this.props.modal !== null){
                this.props.receiveModal(this.props.index);
            }

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

    show(){
        let vid = this.props.video
        let arrow = document.getElementById(`movie-arrow ${vid.id}`);
        



        let add_remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);

        arrow.style.display = 'inline-block'
        arrow.style.opacity = 1
        add_remove_div.style.opacity = 1;
        add_remove_div.style.display = 'flex'
        title.style.opacity = 1
        title.style.display = 'flex'
     


    }

    hide(){
        let vid = this.props.video
        let arrow = document.getElementById(`movie-arrow ${vid.id}`);
        let add_remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);
   
        arrow.style.display = "none";
        add_remove_div.style.opacity = '0';
        title.style.opacity = '0'
    }



    updateList(){

        if(this.props.lists[this.props.video.id]){


            let list = this.props.lists[this.props.video.id]

            this.props.deleteList({id: list.id, video_id: list.video_id, user_id: list.user_id})

        } else {


            this.props.createList({user_id: this.props.user.id, video_id: this.props.video.id})
        }



    }





    render() {
        let vid = this.props.video
        let plusOrCheck;
        let text;



        if(this.props.lists[vid.id]){
            plusOrCheck  = 'fas fa-check index-check';
            text = <div  id={`${vid.id}-add-remove-div`} className='add-remove-div'>Remove from My List</div>
        } else {
            plusOrCheck = 'fas fa-plus index-check'
            text = <div id={`${vid.id}-add-remove-div`} className='add-remove-div'>Add to My List</div>
        }

        // let arrow = document.getElementById(`movie-arrow ${vid.id}`);
        // let add_remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        // let title = document.getElementById(`${vid.id}-index-item-title`);
        // // if(arrow && add_remove_div && title){
      
        //     arrow.style.display = "none";
        //     add_remove_div.style.opacity = '0';
        //     title.style.opacity = '0';
        // }


        return (
            <li onMouseOver={this.show} onMouseOut={this.hide} className='index-item' id = {`video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>

                <i id={`movie-arrow ${vid.id}`} className="movie-arrow fas fa-caret-down fa-2x"></i>
                <div id='index-button-background'><i onClick={this.updateList}  className={plusOrCheck}></i></div>
                {text}
                <h4 id ={`${vid.id}-index-item-title`} className='index-item-title'>{vid.title}</h4>



            </li>

        )
    }

}
export default IndexItemForm;