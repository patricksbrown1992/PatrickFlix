import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: false, test: 1 };
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
        this.props.getVideos()

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
                        <button onClick={this.handleSubmitLogOut}><i  className="fas fa-caret-down fa-2x"></i></button>

                    </div>
                </div>

                <div>
                    <div className='patrick-stewart-div'>
                        <h1>Patrick Stewart</h1>
                        <ul>
                            
                            <Link to='/player/1'>X-Men</Link>
                            <Link to='/player/2'>Star Trek</Link>
                            <Link to='/player/3'>Ted</Link>
            
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className='patrick-swayze-div'>
                        <h1>Patrick Swayze</h1>
                        <ul>
                            <Link to='/player/4'>Dirty Dancing</Link>
                            <Link to='/player/5'>Ghost</Link>
                            <Link to='/player/6'>Point Break</Link>
                            <Link to='/player/7'>Road House</Link>            
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className='neil-patrick-harris-div'>
                        <h1>Neil Patrick Harris</h1>
                        <ul>
                            <Link to='/player/8'>How I Met Your Mother</Link>
                            <Link to='/player/9'>Doogie Howser</Link>
                            <Link to='/player/10'>Gone Girl</Link>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }

}
export default VideoIndexForm;