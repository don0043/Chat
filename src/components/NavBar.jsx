import React, {useContext} from 'react';
import {AppBar, Grid, Toolbar} from "@material-ui/core";
import './../App.css'
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
//навбар с использованием материалЮай
const NavBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar position="static">
            <Toolbar variant={"dense"}>
                <Grid container justify={"flex-end"}>
                    {user ?
                        <button onClick={() => auth.signOut()}>unlogin</button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <button>login</button>
                        </NavLink>

                    }

                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;