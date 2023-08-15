import React, {useState} from "react";
import {useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Login = () =>{
    const history = useHistory();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);

 
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            alert("Email field is required")
        } else if (!email.includes("@")) {
            alert("Please enter a valid Email Address")
        } else if (password === "") {
            alert("Password field is required")
        } else if (password.length < 5) {
            alert("Password is incorrect")
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("User login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history.push("/welcome")
                }
            }
        }

    }

    return(
        <div className=" outer d-flex justify-content-center align-items-center vh-50">
      <div className="inner p-3 bg-white w-25">
      <img className="center" src="/logo.png" style={{ width: 180}} alt="profile" />
      <h1 className="mt-4" style={{fontWeight: 30, textAlign: "center" }}><strong>Login</strong></h1>
                <form>
                    <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={getdata} name='email' placeholder="Enter Email" className="form-control"/>
                    </div>

                    <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <input  type="password" onChange={getdata} name='password' placeholder="Enter Password" className="form-control"/>
                    </div>

                    <button className="btn btn-primary w-100" onClick={addData} type="submit">Login</button> 
                    
                </form>
            </div>
        </div>
    )
}

export default Login