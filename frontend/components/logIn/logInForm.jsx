import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
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
        this.props.login(this.state);
        this.setState({ email: '', password: '' });
        this.props.clearErrors();
    }

    render() {
        let errors
        if (this.props.errors.length > 0) {
            errors = this.props.errors.map((error, idx) => {
                return <li key={idx}>{error}</li>
            })
        }

        return (
            <div className='sign-in-form'>
                <div className='sign-in-title'>
                    <Link to='/'><img src={window.big} /></Link>
                </div>
                <div className='sign-in-body'>
                    <h1>Sign In</h1>
                    <input type="text" value={this.state.email} placeholder='email' onChange={this.handleChange('email')} />
                    <input type="password" value={this.state.password} placeholder='password' onChange={this.handleChange('password')} />
                    <ul>
                        <br />
                        {errors}
                        <br />
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <div className='sign-in-continue'>

                            <button type='submit'>Sign In</button>
                        </div>
                    </form>

                    <br />
                    <div className='redirect-to-sign-up'>
                        <h3>New to PatrickFlix?</h3>
                        <Link to='/signup'> Sign up now.</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogInForm;