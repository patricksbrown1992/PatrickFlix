import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';
import DetailRow from './detailRowContainer';
import FeaturedVideo from './featuredVideoContainer';
import { merge } from 'lodash';

class VideoIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activated: false, test: 1, loaded: null, search: ''};
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.showLogOut = this.showLogOut.bind(this);
        this.duplicateArray = this.duplicateArray.bind(this);
        this.searchUpdate = this.searchUpdate.bind(this);


    }

    handleSubmitLogOut(e) {
        // return (e) => {
            e.preventDefault();
            this.props.logout();
        // }
    }
    componentDidMount(){

        this.props.getVideos().then(() => this.props.getLists(this.props.user)).then(() => this.setState({loaded: true}))

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



    componentWillUnmount(){
        this.props.receiveModal(null);
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
    
    searchUpdate(){

        return (e) => {
            this.setState({search: e.target.value})
        }
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


    render() {
        let searchClass;

        if (this.state.activated) {
            searchClass = 'show-search';

        } else {
            searchClass = 'hide-search';

        }
        if(!this.state.loaded){
            return null;
        }
        let vids = this.props.videos;
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
        let search = this.state.search
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
            search_arr = this.duplicateArray(this.props.videos);

             search_arr = search_arr.filter(video => (

            video.title.toUpperCase().includes(search.toUpperCase())
        ))

            search_arr = search_arr.map(video => {
                return <li key = {video.id} id='search-li'> <Link to={`player/${video.id}`}>{video.title}</Link></li>
            })
        } else {
            search_arr ='';

        }
      




        return (
            <div className='videos-index'>

                <div className='videos-index-header'>
                    <div className='videos-index-header-left'>
                        <img src={window.logo} />
                        <div>
                            <Link to={`lists/${this.props.user.id}`}><h3>My List</h3></Link>

                        </div>
                    </div>
                    <div className='right-nav'>
                        {/* <form id='search-form'>
                            <div id= 'search-div'>
                                <i onClick={this.searchClick} className="fas fa-search fa-2x"></i>
                                <input className={searchClass} type="text" name="search" value={this.state.search} onChange = {this.searchUpdate()} placeholder="Titles" />
                            </div>
                            <div id="search-results">
                                {search_arr}
                            </div>


                        </form>  */}

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

                <div className = 'videos-index-body'>

                    <FeaturedVideo />


                    <div className= 'video-row' id='video-row-1'>
                        <h1 className='featured-video-h1'>Patrick Stewart</h1>

                        <DetailRow identifier= {1} vids = {stewart} range={[0,1,2,3, 4, 5, 6]}/>

                    </div>

                    <div className= 'video-row' id='video-row-2'>
                        <h1 className='featured-video-h1'>Patrick Swayze</h1>

                        <DetailRow identifier= {2} vids={swayze} range = {[7, 8, 9, 10, 11, 12]}/>
                   </div>

                    <div className= 'video-row' id='video-row-3'>
                        <h1 className='featured-video-h1'>Neil Patrick Harris</h1>

                        <DetailRow identifier= {3} vids = {harris} range={[13,14, 15, 16, 17, 18]}/>

                    </div>

                    <div className= 'video-row' id='video-row-4'>
                        <h1 className='featured-video-h1'>Patrick Wilson</h1>

                        <DetailRow identifier= {4} vids = {wilson} range={[19, 20, 21, 22, 23, 24]}/>

                    </div>

                    <div className= 'video-row' id='video-row-5'>
                        <h1 className='featured-video-h1'>Patrick Dempsey</h1>

                        <DetailRow identifier= {5} vids = {dempsey} range={[25, 26, 27, 28, 29, 30, 31]}/>

                    </div>

                </div>
            </div>

        )
    }

}
export default VideoIndexForm;