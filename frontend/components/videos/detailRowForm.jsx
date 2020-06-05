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
        let detail_row = document.getElementById(`detail-row ${this.props.identifier}`);
        debugger
        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            vid = this.props.videos[this.props.modal];
            detail_row.style.opacity = "1";
            detail_row.style.display = "flex";
            detail_row.style.height = "200px";
      
            
        } else {
            vid = {
                title: '',
                year: '',
                description: ''
            }
            // detail_row.style.opacity = "0";
            // detail_row.style.display = "none";
            // detail_row.style.height = "0"
            
            // detail_row.classList.remove("open");
            // vid_row.classList.add("close");
        }
      
        // debugger
        return (
            <div className='detail-row close' id = {`detail-row ${this.props.identifier}`}>
                {vid.title}({vid.year}) - {vid.description}
            </div>

        )
    }

}
export default DetailRowForm;