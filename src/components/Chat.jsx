import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Loader from "./Loader";

const Chat = () => {
    const {auth, firestore} = useContext(Context)//перекинули через конетекст аус и файрстор
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(       //подключились к firestore
        firestore.collection("messages").orderBy('createdAt')
    )


    const sendMessage = async () => {
        firestore.collection("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setValue('')
    }
//ждем пока все прогрузится
    if (loading){
        return <Loader/>
    }
//само окно чата
    return (
        <Container>
            <Grid container justify={"center"} style={{height: window.innerHeight - 50, marginTop: 60}}>
                <div style={{width: '80%', height: '70vh', border: '1.5px solid lightblue', overflowY: 'auto'}}>
                    {messages.map(message =>//сообщение
                        <div>
                            <Grid container>

                                <Avatar src={message.photoURL}/>
                                {message.displayName}

                            </Grid>
                            <div>{message.text}</div>
                        </div>)}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    style={{width: '80%'}}
                >
                    <TextField
                        fullWidth
                        rowsMax={"2"}
                        variant={"outlined"}
                        value={value}
                        onChange = {e => setValue(e.target.value)}/>
                    <Button onClick={sendMessage}>Нажми чтобы отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;