import React from 'react';
import { Link } from 'react-router-dom';
import ListItemContainer from './myListItemContainer';



class MyListForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false, start: 0 };
        this.right = this.right.bind(this);
        this.left = this.left.bind(this);
        

    }

  


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
        
        
        let left_arrow;
        let right_arrow;
        
        let vids = this.props.vids.map((vid, index) => (
            
            <ListItemContainer  key ={index} video={vid} />
        ))
        
        vids = vids.slice(this.state.start, this.state.start + 4)
       

        if(this.state.start == 0){
            left_arrow = '';
        } else {
            left_arrow = 
            <div onClick={this.left} className='left-arrow-div'>
                <i className="fas fa-chevron-left fa-3x"></i>
            </div>
        }
        
        if(this.state.start < this.props.vids.length-4){
            right_arrow = 
            <div onClick={this.right} className='right-arrow-div'>
                <i  className="fas fa-chevron-right fa-3x"></i>
            </div>
            
        } else {
            right_arrow = '';
        }
      
        
     
   
        return (
            <div className = "my-lists-row">
                {left_arrow}
                <div className= 'lists-links-row'>
                    {vids}
                </div>
                {right_arrow}
            </div>
 
   
        )
    }

}
export default MyListForm;