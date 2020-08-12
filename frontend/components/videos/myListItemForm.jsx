import React from 'react';
import { Link } from 'react-router-dom';
import { merge } from 'lodash';
import { deleteList } from '../../util/listUtil';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null, playing: false, open: false, created: false };
        this.destroyList    = this.destroyList.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
       

    }


    
    componentDidMount(){
        let vid = this.props.video;
      
        if(this.props.lists[vid.id]){
            this.setState({created: true})
        }
        let video_li = document.getElementById(`video-li ${vid.id}`);
       
        let check = document.getElementById(`${vid.id}-check`);
        let remove_div = document.getElementById(`${vid.id}-add-remove-div`);
        let title = document.getElementById(`${vid.id}-index-item-title`);
        let user = this.props.user;
   


  
        remove_div.style.opacity = '0';
        title.style.opacity = '0';

        video_li.addEventListener("mouseover", ()=> {
      
            remove_div.style.opacity = '1';
            title.style.opacity = '1'
        })

    

        check.addEventListener("click", () => {
            this.destroyList(vid.id);
        })

        video_li.addEventListener("mouseout", ()=> {
          
            remove_div.style.opacity = '0';
            title.style.opacity = '0'
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




    destroyList(video_id){
      
        let list = this.props.lists[video_id]
        
        this.props.deleteList({id: list.id, video_id: list.video_id, user_id: list.user_id}).then(() => this.setState({created: false}))
            
    }





    render() {
        let vid = this.props.video
        
        let plusOrCheck  = 'fas fa-check index-check';
        let text = <div id={`${vid.id}-add-remove-div`} className='add-remove-div'>Remove from My List</div>

        
  
        return (
            <li  className='my-list-item' id = {`video-li ${vid.id}`} key={vid.id} >
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
                
                <div id='index-button-background'><i id={`${vid.id}-check`} className={plusOrCheck}></i></div>
                {text}
                <h4 id ={`${vid.id}-index-item-title`} className='index-item-title'>{vid.title}</h4>
                


            </li>

        )
    }

}
export default IndexItemForm;