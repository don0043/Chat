import React from 'react';
import {Container, Grid} from "@material-ui/core";
//страница загрузки
const Loader = () => {
    return (
        <Container>
            <Grid container style = {{height: window.innerHeight - 50}} alignItems = {"center"} justify={"center"}>
                <Grid >
                            Загрузка!!!
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;