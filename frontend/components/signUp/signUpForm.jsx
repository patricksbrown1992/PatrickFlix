import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(field) {

        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
        this.setState({ email: '', password: '' });
        this.props.clearErrors();

    }

    render() {
        let errors
        if (this.props.errors.length > 1) {
            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            })
        }
        return (
            <div className='sign-up-form'>
                <div className='sign-up-title'>
                    <Link to='/'><img src={window.big} /></Link>

                </div>
                <div className='sign-in-body'>
                    <h1>Sign Up</h1>
                    <input type="text" value={this.state.email} placeholder='email' onChange={this.handleChange('email')} />
                    <input type="password" value={this.state.password} placeholder='password' onChange={this.handleChange('password')} />
                    <ul>
                        <br />
                        {errors}
                        <br />
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <div className='sign-up-continue'>

                            <button type='submit'>Sign Up</button>
                        </div>
                    </form>

                    <br />

                    <div className='redirect-to-sign-in'>
                        <h3>Already have an account?</h3>
                        <Link to='/login'> Log in</Link>
                    </div>
                </div>
            </div>
        )
    }

}


export default SignUpForm;