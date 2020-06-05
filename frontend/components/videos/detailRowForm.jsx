import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';


class DetailRowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

    }

  
    // componentDidMount(){
    //     let detail_row = document.getElementById(`detail-row ${this.props.identifier}`);
    //     detail_row.addEventListener("mouseover", () => {
    //         if(this.state.open){
    //             this.props.receive()
    //         }
    //     })

    // }




   
    render() {
        let vid;
        let detail_row = document.getElementById(`detail-row-${this.props.identifier}`);
        let text;
        let vids = this.props.vids.map((vid, index) => (
            
            <IndexItem  video={vid} index={index + this.props.range[0]}/>
        ))
        debugger
        // if(this.state.open){
            // vid = this.props.videos[this.props.modal]
            // detail_row.style.opacity = "1";
            // detail_row.style.display = "flex";
            // detail_row.style.height = "20%"
            // text = `${vid.title}(${vid.year}) - ${vid.description}`
        // } else {
            // detail_row.style.opacity = "0";
            // detail_row.style.display = "none";
            // detail_row.style.height = "0"
            // text = ''
        // }
        
        // debugger
        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            vid = this.props.videos[this.props.modal]
            detail_row.style.opacity = "1";
            detail_row.style.display = "flex";
            detail_row.style.height = "20%"
            text = `${vid.title}(${vid.year}) - ${vid.description}`
            
            // this.setState({open: true})
            
        } else {
            text = ''
            // this.setState({open: false})
        //     this.setState({open: false})
            // detail_row.style.opacity = "0";
            // detail_row.style.display = "none";
            // detail_row.style.height = "0"
            
        //     detail_row.classList.remove("open");
        //     vid_row.classList.add("close");
        }
      
        // debugger
        // return (
            // <div className='detail-row close' id = {`detail-row ${this.props.identifier}`}>
            //     {vid.title}({vid.year}) - {vid.description}
            // </div>

        // )

        return (
            <div className = "video-row-inner">
                <div className= 'links-row'>
                    {vids}
                </div>
                <div className='detail-row close' id = {`detail-row-${this.props.identifier}`}>
                    {/* {vid.title}({vid.year}) - {vid.description} */}
                    {text}
                </div>
                
            </div>
        )
    }

}
export default DetailRowForm;