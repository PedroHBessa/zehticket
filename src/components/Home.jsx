import Form from "./Form";
import Login from "./Login";
import NavBar from "./NavBar";
import NavBarConsole from "./NavBarConsole";
import Signup from "./Signup";
import UserMenu from "./UserMenu";
import Panel from "./Panel";

const Home = () => {
    return (
        <div className="home">
            <NavBarConsole />
            <UserMenu />
            <Panel />
          
        </div>
    )
}

export default Home;