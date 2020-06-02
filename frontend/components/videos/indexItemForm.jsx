import React from 'react';
import { Link } from 'react-router-dom';

class IndexItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loaded: null };
       
    }

    // componentDidMount(){
    //     this.props.getVideos().then(() => this.setState({loaded: true}))

    // }






    render() {
        let vid = this.props.video
        debugger
        return (
            <div className='index-item' key={vid.id}>
                <Link to={`/player/${vid.id}`}> <img src={vid.image_link} alt=""/> </Link>
            </div>

        )
    }

}
export default IndexItemForm;