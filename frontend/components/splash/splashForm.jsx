import React from 'react';
import { Link } from 'react-router-dom';
import {login, clearErrors} from '../../actions/sessionActions';
import { connect } from 'react-redux';

const mdp = dispatch => ({
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});





class SplashForm extends React.Component {
    constructor(props) {
        super(props);
        this.loginPerson = this.loginPerson.bind(this);

    }

    loginPerson(){

        let email = 'admin@admin.com';
        let password = '123456'
        let person = {email, password};
        this.props.login(person);
        this.props.clearErrors()
     
    }

    
    
    render (){

        return (
            <div className='splash-form'>

                <div className='splash-header'>
                    <div className="links-div">
                        <ul>
                            <a href="https://patricksbrown1992.github.io/portfolio/">Portfolio</a>
                            <a href="https://www.linkedin.com/in/patricksbrown1992/">LinkedIn</a>
                            <a href="https://github.com/patricksbrown1992">Github</a>

                        </ul>
                    </div>
                    <img src={window.big} />
                    <div className='splash-head-right'>
                        <h3>Have an account?</h3>
                        <nav>
                            <Link to='/login'>Sign In</Link>
                        </nav>

                    </div>
                </div>
                <div className='splash-body'>
                    <h1>See what's next.</h1>
                    <h3>WATCH ANYWHERE. CANCEL ANYTIME.</h3>
                    <nav>
                        <Link to='/signup'>Sign Up</Link>
                    </nav>
                    <button onClick={this.loginPerson}>Demo Login</button>
                </div>
            </div>
        )
    }
}


export default connect(null, mdp)(SplashForm);