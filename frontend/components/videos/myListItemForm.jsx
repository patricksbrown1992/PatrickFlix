import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { deleteList } from '../../util/listUtil';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null };
        this.destroyList    = this.destroyList.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.mouse_over = this.mouse_over.bind(this);
        this.mouse_out = this.mouse_out.bind(this);
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

    mouse_over(){
        let vid = this.props.video
        let remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);
        remove_div.style.opacity = '1';
        title.style.opacity = '1'
    }

    mouse_out(){
        let vid = this.props.video
        let remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);
        remove_div.style.opacity = '0';
        title.style.opacity = '0'
    }




    destroyList(){
      
        let list = this.props.lists[this.props.video.id]
        
        this.props.deleteList({id: list.id, video_id: list.video_id, user_id: list.user_id})
            
    }





    render() {
        let vid = this.props.video
    
        let plusOrCheck  = 'fas fa-check index-check';
        let text = <div id={`${vid.id}-add-remove-div`} className='add-remove-div'>Remove from My List</div>
        let remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);
        if(title && remove_div){
            remove_div.style.opacity = '0';
            title.style.opacity = '0';
        }
        
        
  
        return (
            <li  onMouseOver={this.mouse_over} onMouseOut={this.mouse_out} className='my-list-item' id = {`my-list-video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
                
                <div onClick={this.destroyList} id='index-button-background'><i id={`${vid.id}-check`} className={plusOrCheck}></i></div>
                {text}
                <h4 id ={`${vid.id}-index-item-title`} className='index-item-title'>{vid.title}</h4>
                


            </li>

        )
    }

}
export default IndexItemForm;