import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';


class DetailRowForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false, start: 0 };
        this.right = this.right.bind(this);
        this.left = this.left.bind(this);
        

    }

  
    // componentDidMount(){
    //     let video_row_inner = document.getElementById(`video-row-inner-${this.props.identifier}`);
    //     video_row_inner.addEventListener("mouseover", () => {
    //         if(this.props.modal !== null ){

    //         }
    //     })

    // }

    right(){
        if(this.state.start < this.props.vids.length-4){
            this.setState({start: this.state.start += 1})
        }
        
    }

    left(){
        if(this.state.start > 0){
            this.setState({start: this.state.start -= 1})
        }
        

    }


   
    render() {
        let vid;
        let detail_row = document.getElementById(`detail-row-${this.props.identifier}`);
        let video_row = document.getElementById(`video-row-${this.props.identifier}`);
        // debugger
        let text;
        let button;
        let vids = this.props.vids.slice(this.state.start,this.state.start + 4).map((vid, index) => (
            
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
        
        // if(this.state.open){
            // text = <div id ={`detail-row-show-${1}`} className='detail-row-show'> <div className='left-show-div'><Link to={`/player/${vid.id}`}><i className="fas fa-play" id="play-button-detail"></i></Link><h3 className= 'featured-video-h3'>{vid.title}({vid.year}) - {vid.description}</h3></div><img src={vid.image_link} alt=""/></div>
        // } else {
        //     text = <div id ={`detail-row-hide-${1}`} className='detail-row-hide'></div>;
        //     button='';
        // }

        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            vid = this.props.videos[this.props.modal]
            detail_row.style.opacity = "1";
            detail_row.style.display = "flex";
            detail_row.style.height = "350px";
            video_row.style.height = '500px';
            text = <div id ={`detail-row-show-${1}`} className='detail-row-show'> <div className='left-show-div'><Link to={`/player/${vid.id}`}><i className="fas fa-play" id="play-button-detail"></i></Link><h3 className= 'featured-video-h3'>{vid.title}({vid.year}) - {vid.description}</h3></div><img src={vid.image_link} alt=""/></div>
            // button = <button onClick={this.createList(vid.id)}>Please Click</button>
            
            // this.setState({open: true})
            
        } else {
            text = <div id ={`detail-row-hide-${1}`} className='detail-row-hide'></div>;
            button='';
            
            // this.setState({open: false})
        //     this.setState({open: false})
            // detail_row.style.opacity = "0";
            // detail_row.style.display = "none";
            // detail_row.style.height = "0"
        if(video_row){
            video_row.style.height = 'auto';
        }
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
                <i onClick={this.left}class="fas fa-arrow-left"></i>
                <div className= 'links-row'>
                    {vids}
                </div>
                <i onClick={this.right} class="fas fa-arrow-right"></i>
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