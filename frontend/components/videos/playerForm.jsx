import React from 'react';
import { Link, Redirect} from 'react-router-dom';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume: 1,
            time: '00:00',
            playing: true,
        };
        // this.goBack = this.goBack.bind(this);
    }

    // goBack(e){
    //     e.preventDefault();
    //     return <Redirect to='/videos' />
    // }


    render() {
       
        return (
            <div className='video-player'>
                <Link to='/videos'><i className="fas fa-arrow-left fa-2x"></i></Link> 
                <h1>Hi</h1>
            </div>

        )
    }

}
export default PlayerForm;