import { connect } from 'react-redux';
import IndexItemForm from './indexItemForm';

const msp = state => ({
    errors: state.errors,
    videos: Object.values(state.entities.videos),
});


const mdp = dispatch => ({
    
});

export default connect(msp, mdp)(IndexItemForm);