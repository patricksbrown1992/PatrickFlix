import React from 'react';
import { Link } from 'react-router-dom';

class PlayerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            volume: 1,
            time: '00:00',
            playing: true,
        };

    }



    render() {
       
        return (
            <div className='video-player'>
                <h1>Hi</h1>
            </div>

        )
    }

}
export default PlayerForm;