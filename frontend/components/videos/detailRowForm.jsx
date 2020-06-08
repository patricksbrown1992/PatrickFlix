import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';


class DetailRowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        

    }

  
    // componentDidMount(){
    //     let video_row_inner = document.getElementById(`video-row-inner-${this.props.identifier}`);
    //     video_row_inner.addEventListener("mouseover", () => {
    //         if(this.props.modal !== null ){

    //         }
    //     })

    // }



   
    render() {
        let vid;
        let detail_row = document.getElementById(`detail-row-${this.props.identifier}`);
        let text;
        let button;
        let vids = this.props.vids.map((vid, index) => (
            
            <IndexItem  key ={index + this.props.range[0]} video={vid} index={index + this.props.range[0]}/>
        ))
      
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
        
     
        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            vid = this.props.videos[this.props.modal]
            detail_row.style.opacity = "1";
            detail_row.style.display = "flex";
            detail_row.style.height = "350px"
            text = <div className='detail-row-show'><h3 className= 'featured-video-h3'>{vid.title}({vid.year}) - {vid.description}</h3><img src={vid.image_link} alt=""/></div>
            // button = <button onClick={this.createList(vid.id)}>Please Click</button>
            
            // this.setState({open: true})
            
        } else {
            text = '';
            button='';
            // this.setState({open: false})
        //     this.setState({open: false})
            // detail_row.style.opacity = "0";
            // detail_row.style.display = "none";
            // detail_row.style.height = "0"
            
        //     detail_row.classList.remove("open");
        //     vid_row.classList.add("close");
        }
      
        
        // return (
            // <div className='detail-row close' id = {`detail-row ${this.props.identifier}`}>
            //     {vid.title}({vid.year}) - {vid.description}
            // </div>

        // )

        return (
            <div key={this.props.identifier} className = "video-row-inner" id = {`video-row-inner-${this.props.identifier}`}>
                <div className= 'links-row'>
                    {vids}
                </div>
                <div  className='detail-row' id = {`detail-row-${this.props.identifier}`}>
                    {/* {vid.title}({vid.year}) - {vid.description} */}
                    {text}
                    {button}
                </div>
                
            </div>
        )
    }

}
export default DetailRowForm;