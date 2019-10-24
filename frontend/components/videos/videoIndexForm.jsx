import React from 'react';
import { Link } from 'react-router-dom';

class VideoIndexForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: false };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.searchClick = this.searchClick.bind(this);
    }

    handleLogOut() {
        return (e) => {
            e.preventDefault();
            this.props.logout();
        }
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


                        <img src={window.icon} onClick={this.handleLogOut()} />
                        <i onClick={this.handleLogOut()} className="fas fa-caret-down fa-2x"></i>

                    </div>
                </div>

                <div>
                    <div className='patrick-stewart-div'>
                        <h1>Patrick Stewart</h1>
                        <ul>
                            <li>X-Men</li>
                            <li>Star Trek</li>
                            <li>Ted</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className='patrick-swayze-div'>
                        <h1>Patrick Swayze</h1>
                        <ul>
                            <li>Dirty Dancing</li>
                            <li>Ghost</li>
                            <li>Point Break</li>
                            <li>Road House</li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <div className='neil-patrick-harris-div'>
                        <h1>Neil Patrick Harris</h1>
                        <ul>
                            <li>How I Met Your Mother</li>
                            <li>Doogie Howser</li>
                            <li>Gone Girl</li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }

}
export default VideoIndexForm;