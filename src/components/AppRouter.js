import React, {useContext} from 'react';
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {privateRoutes, publicRoutes} from "../routes";
import {Route, Redirect, Switch} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const AppRouter = () => {

    const {auth} = useContext(Context)
    const {user} = useAuthState(auth)

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                <Route key={path} path={path} component={Component} exact={true}/>
                )}
                <Redirect to={CHAT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true}/>
                )}
                <Redirect to={LOGIN_ROUTE}/>
            </Switch>
        )
        ;
};

export default AppRouter;