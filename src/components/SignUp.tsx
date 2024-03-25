import "../styles/SignUp.css"
export const SignUp = () => {
  return (
    <div className="sign-up">
    <h1>Sign Up</h1>
    <div className="names">
        <input type="text"  placeholder="First Name" className="name"/>
        <input type="text"  placeholder="Last Name" className="lastName"/>
    </div>
    <div className="emailPassword">
        <input type="email" placeholder="Email" className="mail"/>
        <input type="password" placeholder="Password" className="pass"/>
        <input type="password" placeholder="Comfirm Password" className="comf-pass"/>

    </div>

    <div className="lastdv">

        <div className="check">
        <p className="p1"><input type="checkbox" />  I accept the terms of user & privancy police</p>
        </div>

        <button className="btn">Sign Up</button>
        <p className="p2">Alredy have an account?<a className = "goghere" href="">Login here</a></p>
        <p className="p3">copyright @ nono-x-tech</p>
    </div>
        
    </div>
  )
}
