import "../styles/Home.css"
import { MainContent } from "./MainContent";
import Navigation from "./Navigation";
import { SignUp } from "./SignUp";
const Home = () =>{
    return(
        <div className="Home">
        <Navigation/>
        <SignUp/>
        </div>
    )
}
export default Home;