import React from 'react';
import { merge } from 'lodash';
import { Link } from 'react-router-dom';


class ListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: false, search: '', activated: false };
        this.duplicateArray = this.duplicateArray.bind(this);
        this.showLogOut = this.showLogOut.bind(this);
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.searchUpdate = this.searchUpdate.bind(this);
        this.showButton = this.showButton.bind(this);
        this.hideButton = this.hideButton.bind(this);
        this.removeList = this.removeList.bind(this);

    }

    searchUpdate(){

        return (e) => {
            this.setState({search: e.target.value})
        }
    }

    removeList(e){
        
        let video_id = parseInt(e.target.id.split('-')[0]);
        let user_id = this.props.user.id;
        let id = parseInt(e.target.id.split('-')[1]);
        debugger
        this.props.deleteList({video_id, user_id, id})
    }
    

    handleSubmitLogOut(e) {
        // return (e) => {
            e.preventDefault();
            this.props.logout();
        // }
    }

    searchClick() {
        let search_res = document.getElementById('search-results');
        let search_form = document.getElementById('search-form');
        if(search_res.style.opacity == '1'){
            search_res.style.opacity = '0';
            search_res.style.height = 0;
            search_form.style.height = 'auto';
            search_form.style.width = '45px'
        } else {
            search_res.style.opacity = '1';
            search_form.style.width = 'auto'

        }
        this.setState({ activated: !this.state.activated });
    }

    hideButton(e){
        // debugger
        
        let kids = e.currentTarget.children;
        let background = kids[2]
        let check = background.children[0];
        background.style.opacity = '0'
        check.style.opacity = '0'
        let remove = kids[3]
        remove.style.opacity = '0'
    }

    showButton(e){
        // debugger
        let kids = e.currentTarget.children;
        let background = kids[2]
        let check = background.children[0];
        background.style.opacity = '1'
        check.style.opacity = '1'
        let remove = kids[3]
        remove.style.opacity = '1'
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

    showLogOut(){
        const modal = document.getElementById("log-out-modal");

        if(modal.style.opacity == "1"){
            modal.style.opacity = "0"
            modal.style.zIndex = 1;
        } else {
            modal.style.opacity = "1.0"
            modal.style.zIndex = 5;
        }


    }


    componentDidMount(){
        this.props.getVideos().then( () => this.props.getLists(this.props.user)).then(() => this.setState({loaded: true}))
        
    
    }

   




    render() {

        // if(!this.state.loaded){
        //     return null
        // }

        let searchClass;

        if (this.state.activated) {
            searchClass = 'show-search';

        } else {
            searchClass = 'hide-search';

        }
       

        let videos = this.props.videos;
        let lists = this.duplicateArray(this.props.lists);
        lists = lists.map(list => {
            return <div id ={`${list.id}-list-div`} onMouseOut={this.hideButton} onMouseOver={this.showButton} key = {list.id} className='list-div'> 
                <Link   id='list-li' to={`/player/${videos[list.video_id].id}`}><img className="tile__img" src={videos[list.video_id].image_link} /></Link>
                <h3 className='list-video-h3'>{videos[list.video_id].title}</h3><div  id='button-background'><i onClick={this.removeList} id={`${list.video_id}-${list.id}-list-check`} className="fas fa-check hidden"></i></div><div id='remove-from-list'  >Remove from My List</div>
            </div>
            
        })

        let search_arr
        let search_form = document.getElementById('search-form');
        if(this.state.search.length && this.state.activated){

            let search_res = document.getElementById('search-results');

            let search_div = document.getElementById('search-div');
            search_res.style.height = '150px';
            search_form.style.height = '350px';
            search_div.style.height = '35px';
            search_form.style.justifyContent = 'flex-end';
            // search_form.style.top = '0';
            search_arr = this.duplicateArray(Object.values(this.props.videos));

            let search = this.state.search;
            
            search_arr = search_arr.filter(video => (

            video.title.toUpperCase().includes(search.toUpperCase())
             ))

            search_arr = search_arr.map(video => {
                return <li key = {video.id}  id='search-li'> <Link to={`/player/${video.id}`}>{video.title}</Link></li>
            })
        } else {
            search_arr ='';

        }
        

        return (
            <div id='my-list-div'>
                <div className='videos-index-header'>
                    <div className='videos-index-header-left'>
                        <Link to='/videos'><img src={window.logo} /></Link>

                    </div>
                    <div className='right-nav'>


                        <div id='search-form'>
                            <div id= 'search-div'>
                                <i onClick={this.searchClick} className="fas fa-search fa-2x"></i>
                                <input className={searchClass} type="text" name="search" value={this.state.search} onChange = {this.searchUpdate()} placeholder="Titles" />

                            </div>
                            <div id="search-results">
                                {search_arr}
                            </div>
                        </div>





                        <img onClick={this.showLogOut} src={window.icon} />
                        <button onClick={this.showLogOut} id = 'log-out-arrow' ><i  className="fas fa-caret-down fa-2x"></i></button>
                        <div id='log-out-modal'>
                            <button id = 'log-out-button' onClick={this.handleSubmitLogOut}>Log Out</button>
                        </div>
                    </div>
                </div>
                <div id="list-body">
                    <h1 className="featured-video-h1">My List</h1>
                    {lists}
                </div>

            </div>
        )
    }

}
export default ListForm;