import React from 'react';
import { Link } from 'react-router-dom';


const SplashForm = () => {

    return (
        <div className='splash-form'>

            <div className='splash-header'>
                <div className="links-div">
                    <ul>
                        <a href="https://patricksbrown1992.github.io/profile-site/">Portfolio</a>
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
            </div>
        </div>
    )
}

export default SplashForm;
