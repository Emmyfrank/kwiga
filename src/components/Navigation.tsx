import "../styles/Navigation.css"
import imange from "../assets/logoo.jpeg"


const Navigation = ()=>{
    return(

        <div className="Navigation">
            
            <a href=""className="logo"> <img src={imange} alt="logo-image" /></a>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">SERVICE</a>
            <a href="">CONTACT-US</a>
            <a href="">LOGIN</a>
            <a href="">SIGN-UP</a>

        </div>

    )
}
export default Navigation;