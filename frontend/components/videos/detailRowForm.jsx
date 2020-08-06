import React from 'react';
import { Link } from 'react-router-dom';
import IndexItem from './indexItemContainer';
import HiddenRowContainer from './hiddenRowContainer';


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
        
        let video_row = document.getElementById(`video-row-inner-${this.props.identifier}`);
        
        let hidden_row_div;
        let left_arrow;
        let right_arrow;
        let vids = this.props.vids.map((vid, index) => (
            
            <IndexItem  key ={index + this.props.range[0]} video={vid} index={index + this.props.range[0]}/>
        ))

        vids = vids.slice(this.state.start,this.state.start + 4)
        
        if(this.props.modal !== null &&  this.props.range.includes(this.props.modal)){
            // debugger
            vid = this.props.videos[this.props.modal]
            hidden_row_div = <HiddenRowContainer vid={vid}/>
            
            video_row.style.height = '600px';
            
         
            
        } 
        else {
     
  
            hidden_row_div = ''
            // <div id ={`detail-row-hide-${1}`} className='detail-row-hide'></div>;
         
            
        
            if(video_row){
                video_row.style.height = '200px';
            }
   
        }

        if(this.state.start == 0){
            left_arrow = '';
        } else {
            left_arrow = 
            <div onClick={this.left} className='left-arrow-div'>
                <i onClick={this.left}className="fas fa-chevron-left fa-3x"></i>
            </div>
        }
        
        if(this.state.start < this.props.vids.length-4){
            right_arrow = 
            <div onClick={this.right} className='right-arrow-div'>
                <i onClick={this.right} className="fas fa-chevron-right fa-3x"></i>
            </div>
            
        } else {
            right_arrow = '';
        }
      
        
        // return (
            // <div className='detail-row close' id = {`detail-row ${this.props.identifier}`}>
            //     {vid.title}({vid.year}) - {vid.description}
            // </div>

        // )
   
        return (
            <div key={this.props.identifier} className = "video-row-inner" id = {`video-row-inner-${this.props.identifier}`}>
                
                <div className = "top-row">
                    {left_arrow}
                    <div className= 'links-row'>
                        {vids}
                    </div>
                    {right_arrow}
                </div>
                {hidden_row_div}
              
                
                
            </div>
        )
    }

}
export default DetailRowForm;