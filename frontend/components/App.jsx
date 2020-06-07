import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SplashBody from './splash/splashForm';
import SignUp from './signUp/signUpContainer';
import Login from './logIn/logInContainer';
import { Authorized, ProtectedRoute } from '../util/routeUtil';
import VideoIndex from '../components/videos/videoIndexContainer';
import Player from '../components/videos/playerContainer';
import List from '../components/list/listContainer';
const App = () => (
    <>
        <Switch>
            <Authorized path='/signup' component={SignUp} />
            <Authorized path='/login' component={Login} />
            <ProtectedRoute path='/videos' component={VideoIndex} />
            <ProtectedRoute path='/player/:video_id' component={Player} />
            <ProtectedRoute path='/lists/:user_id' component={List} />
            <Authorized exact path='/' component={SplashBody} />


        </Switch>
    </>
);

export default App;
