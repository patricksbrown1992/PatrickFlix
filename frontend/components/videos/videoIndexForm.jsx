import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';
import DetailRow from './detailRowContainer';
import FeaturedVideo from './featuredVideoContainer';

class VideoIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: false, test: 1, loaded: null };
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
        this.searchClick = this.searchClick.bind(this);
        this.showLogOut = this.showLogOut.bind(this);
     

    }

    handleSubmitLogOut(e) {
        // return (e) => {
            e.preventDefault();
            this.props.logout();
        // }
    }
    componentDidMount(){
       
        this.props.getVideos().then(() => this.setState({loaded: true}))
        


       

    }

    showLogOut(){
        const modal = document.getElementById("log-out-modal");
        // debugger
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
        this.setState({ search: !this.state.search });
    }
   

    render() {
        let searchClass;
        let rightnav;
        if (this.state.search) {
            searchClass = 'show-search';
            rightnav = 'search-activated';
        } else {
            searchClass = 'hide-search';
            rightnav = 'search-hidden';
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
        
        
        
        return (
            <div className='videos-index'>
                
                <div className='videos-index-header'>
                    <div className='videos-index-header-left'>
                        <img src={window.logo} />
                        <div>
                            <h3>My List</h3>

                        </div>
                    </div>
                    <div className={rightnav}>
                        <form>
                            <i onClick={this.searchClick} className="fas fa-search fa-2x"></i>

                            <input className={searchClass} type="text" name="search" placeholder="Titles, people, genres" />
                        </form>


                        <img src={window.icon} />
                        <button onClick={this.showLogOut} id = 'log-out-arrow' ><i  className="fas fa-caret-down fa-2x"></i></button>
                        <div id='log-out-modal'>
                            <button id = 'log-out-button' onClick={this.handleSubmitLogOut}>Log Out</button>
                        </div>
                    </div>
                </div>

                <div className = 'videos-index-body'>

                    <FeaturedVideo />
                     

                    <div className= 'video-row'>
                        <h1 className='featured-video-h1'>Patrick Stewart</h1>
                        
                        <DetailRow identifier= {0} vids = {stewart} range={[0,1,2,3, 4, 5, 6]}/>

                    </div>
                    
                    <div className= 'video-row'>
                        <h1 className='featured-video-h1'>Patrick Swayze</h1>
                        
                        <DetailRow identifier= {1} vids={swayze} range = {[7, 8, 9, 10, 11, 12]}/>
                   </div>
                    
                    <div className= 'video-row'>
                        <h1 className='featured-video-h1'>Neil Patrick Harris</h1>
                       
                        <DetailRow identifier= {2} vids = {harris} range={[13,14, 15, 16, 17, 18]}/>

                    </div>

                    <div className= 'video-row'>
                        <h1 className='featured-video-h1'>Patrick Wilson</h1>
                        
                        <DetailRow identifier= {3} vids = {wilson} range={[19, 20, 21, 22, 23, 24]}/>

                    </div>

                    <div className= 'video-row'>
                        <h1 className='featured-video-h1'>Patrick Dempsey</h1>
                        
                        <DetailRow identifier= {4} vids = {dempsey} range={[25, 26, 27, 28, 29, 30, 31]}/>

                    </div>
                   
                </div>
            </div>

        )
    }

}
export default VideoIndexForm;