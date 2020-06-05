import React from 'react';
import { Link } from 'react-router-dom';


class DetailRowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

    }

  
    // componentDidMount(){
    //     this.props.getVideos().then(() => this.setState({loaded: true}))

    // }




   
    render() {
        let vid;
        debugger
        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            vid = this.props.videos[this.props.modal];
            let vid_row = document.getElementById(`video-row ${this.props.identifier}`);
            // if(this.props.modal == 1){
            //     vid_row.classList.remove("open");
            //     vid_row.classList.add("close");
            // } else {
                
                vid_row.classList.remove("close");
                vid_row.classList.add("open");
                
            // }
            
        } else {
            vid = {
                title: '',
                year: '',
                description: ''
            }
        }
      
        // debugger
        return (
            <div className='video-row close' id = {`video-row ${this.props.identifier}`}>
                {vid.title}{vid.year} - {vid.description}
            </div>

        )
    }

}
export default DetailRowForm;