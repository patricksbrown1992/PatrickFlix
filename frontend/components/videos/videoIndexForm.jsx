import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';
import DetailRow from './detailRowContainer';
import FeaturedVideo from './featuredVideoContainer';
import { merge } from 'lodash';
import MyListContainer from './myListContainer';

const VideoIndexForm = props => {
    const [activated, updateActivated] = useState(() => {
        return false;
    })

    const [search, updateSearch] = useState(() => {
        return '';
    })

    useEffect(() => {
        props.getVideos().then(() => props.getLists(props.user))
        // .then(() => setState({loaded: true}))
        return (() => {
            props.receiveModal(null);
        })
    }, [])

    function handleSubmitLogOut(e) {
        e.preventDefault();
        props.logout();
    }

    function showLogOut(e){
        e.preventDefault()
        const modal = document.getElementById("log-out-modal");
        if(modal.style.opacity == "1"){
            modal.style.opacity = "0"
            modal.style.zIndex = 1;
        } else {
            modal.style.opacity = "1.0"
            modal.style.zIndex = 5;
        }
    }







    function searchClick() {
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
        updateActivated(!activated)
    }
    
    function searchUpdate(e){
        e.preventDefault()
        updateSearch(e.target.value)
    }

    function duplicateArray(array) {
        // deep dupes objects
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let newObject = merge({}, array[i]);
            newArray.push(newObject);
        }
        return newArray;
    }


  
    
    if(!Object.values(props.videos).length){
        return null;
    }

    let vids = Object.values(props.videos);
    let stewart = vids.slice(0, 7);
    // .map((vid, index)=> (

    //     <IndexItem  video={vid} index={index}/>
    // ))
    let swayze = vids.slice(7, 13);
    // .map((vid, index) => (

    //     <IndexItem  video={vid} index={index+3}/>
    // ))
    let harris = vids.slice(13, 19);
    // .map((vid, index) => (
    let wilson = vids.slice(19,25)
    let dempsey = vids.slice(25)
    //     <IndexItem  video={vid} index={index+7}/>
    // ))
    let search_arr
    let search_form = document.getElementById('search-form');
    if(search.length && activated){

        let search_res = document.getElementById('search-results');

        let search_div = document.getElementById('search-div');
        search_res.style.height = '150px';
        search_form.style.height = '350px';
        search_div.style.height = '35px';
        search_form.style.justifyContent = 'flex-end';
        // search_form.style.top = '0';
        search_arr = duplicateArray(Object.values(props.videos));

            search_arr = search_arr.filter(video => (

        video.title.toUpperCase().includes(search.toUpperCase())
    ))

        search_arr = search_arr.map(video => {
        return <li key = {video.id}  id='search-li'> <Link to={`/player/${video.id}`}>{video.title}</Link>
        <hr/></li>
        })
    } else {
        search_arr ='';

    }
    let list_to_vids;
    let vid_object;
    if(props.lists.length){
        vid_object = props.videos
        list_to_vids = [];
    
        let i = 0
        while(i < props.lists.length){
            list_to_vids.push(vid_object[props.lists[i].video_id])
            i++;
        }

   
    }



    return (
        <div className='videos-index'>

            <div className='videos-index-header'>
                <div className='videos-index-header-left'>
                    <img src={window.logo} />
                    <div>
                        <Link to={`lists/${props.user.id}`}><h3>My List</h3></Link>

                    </div>
                </div>
                <div className='right-nav'>
                  

                    <div id='search-form'>
                        <div id= 'search-div'>
                            <i onClick={searchClick} className="fas fa-search fa-2x"></i>
                            <input className={activated ? 'show-search' : 'hide-search'}  id = 'search-input' type="text" name="search" value={search} onChange = {searchUpdate} placeholder="Titles" />
                        </div>
                        <div id="search-results">
                            {search_arr}
                        </div>
                    </div>





                    <img onClick={showLogOut} src={window.icon} />
                    <button onClick={showLogOut} id = 'log-out-arrow' ><i  className="fas fa-caret-down fa-2x"></i></button>
                    <div id='log-out-modal'>
                        <button id = 'log-out-button' onClick={handleSubmitLogOut}>Log Out</button>
                    </div>
                </div>
            </div>

            <div className = 'videos-index-body'>

                <FeaturedVideo />

                {props.lists.length ? <div className= 'video-row' id='video-row-6'>
                    <h1 className='index-h1'>My List</h1>

                    <MyListContainer identifier= {6} vids = {list_to_vids} />

                    </div> : ''
                }
                <div className= 'video-row' id='video-row-1'>
                    <h1 className='index-h1'>Patrick Stewart</h1>

                    <DetailRow identifier= {1} vids = {stewart} range={[0,1,2,3, 4, 5, 6]}/>

                </div>

                <div className= 'video-row' id='video-row-2'>
                    <h1 className='index-h1'>Patrick Swayze</h1>

                    <DetailRow identifier= {2} vids={swayze} range = {[7, 8, 9, 10, 11, 12]}/>
                </div>

                <div className= 'video-row' id='video-row-3'>
                    <h1 className='index-h1'>Neil Patrick Harris</h1>

                    <DetailRow identifier= {3} vids = {harris} range={[13,14, 15, 16, 17, 18]}/>

                </div>

                <div className= 'video-row' id='video-row-4'>
                    <h1 className='index-h1'>Patrick Wilson</h1>

                    <DetailRow identifier= {4} vids = {wilson} range={[19, 20, 21, 22, 23, 24]}/>

                </div>

                <div className= 'video-row' id='video-row-5'>
                    <h1 className='index-h1'>Patrick Dempsey</h1>

                    <DetailRow identifier= {5} vids = {dempsey} range={[25, 26, 27, 28, 29, 30, 31]}/>

                </div>

                <div className="links-index-div">
                    <ul>
                        <a href="https://patricksbrown1992.github.io/portfolio/" target="_blank">Portfolio</a>
                        <a href="https://www.linkedin.com/in/patricksbrown1992/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/patricksbrown1992" target="_blank">Github</a>

                    </ul>
                </div>

            </div>
        </div>

    )
    

}
export default VideoIndexForm;