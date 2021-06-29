import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import Chat from "./components/Chat";
import AppRouter from "./components/AppRouter";
import {useContext} from "react";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";

function App() {

    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)
    if (loading){
        return <Loader/>
    }
  return(
<BrowserRouter>
    <NavBar/>
    <AppRouter/>
</BrowserRouter>
      )

}

export default App;
