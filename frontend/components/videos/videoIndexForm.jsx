import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';
import DetailRow from './detailRowContainer';

class VideoIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: false, test: 1, loaded: null };
        this.handleSubmitLogOut = this.handleSubmitLogOut.bind(this);
        this.searchClick = this.searchClick.bind(this);

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
        let stewart = vids.slice(0, 3);
        // .map((vid, index)=> (
           
        //     <IndexItem  video={vid} index={index}/>
        // ))
        let swayze = vids.slice(3, 7);
        // .map((vid, index) => (
           
        //     <IndexItem  video={vid} index={index+3}/>
        // ))
        let harris = vids.slice(7);
        // .map((vid, index) => (
           
        //     <IndexItem  video={vid} index={index+7}/>
        // ))
        // debugger
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
                        <button className = 'log-out-button' onClick={this.handleSubmitLogOut}><i  className="fas fa-caret-down fa-2x"></i></button>

                    </div>
                </div>

                <div className = 'videos-index-body'>
                    <div className= 'video-row'>
                        <h1>Patrick Stewart</h1>
                        {/* <div className='patrick-stewart-div'>
                            
                       
                        
                            {stewart}
                           
                                
                
                            
                        </div> */}
                        <DetailRow identifier= {0} vids = {stewart} range={[0,1, 2]}/>

                    </div>
                    
                    <div className= 'video-row'>
                        <h1>Patrick Swayze</h1>
                        {/* <div className='patrick-swayze-div'>
                            
                                
                                {swayze}
                         
                        </div> */}
                        <DetailRow identifier= {1} vids={swayze} range = {[3,4, 5, 6]}/>
                   </div>
                    
                    <div className= 'video-row'>
                        <h1>Neil Patrick Harris</h1>
                        {/* <div className='neil-patrick-harris-div'>
                            
                          
                                {harris}
                         
                        </div> */}
                        <DetailRow identifier= {2} vids = {harris} range={[7,8,9]}/>

                    </div>
                   
                </div>
            </div>

        )
    }

}
export default VideoIndexForm;