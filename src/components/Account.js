import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


const Account = () => {

    const history = useHistory();

    const [inpval, setInpval] = useState({
        name: "",
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

        const { name, email, password } = inpval;

        if (name === "") {
            alert("Name field is required")
        } else if (email === "") {
            alert("Email field is required")
        } else if (!email.includes("@")) {
            alert("Email field is required")
        }  else if (password === "") {
            alert("Password is required")
        } else if (password.length < 5) {
            alert("Password lenght greater than 5")
        } else {
            console.log("Data added succesfully");
            history.replace("/")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

        }

    }

    return (

        <div className=" outer d-flex justify-content-center align-items-center vh-50">
            <div className="inner2 p-3 bg-white w-25">
                <img className="center" src="/logo.png" style={{ width: 180 }} alt="profile" />
                <h1 className="mt-3" style={{ fontWeight: 30, textAlign: "center" }}><strong>Register</strong></h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="email">Name</label>
                        <input type="text" name='name' onChange={getdata} placeholder="Enter Name" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onChange={getdata} placeholder="Enter Email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' onChange={getdata} placeholder="Enter Password" className="form-control" />
                    </div>

                    <button className="btn btn-primary w-100" onClick={addData} type='submit'>Register</button>
                    <p>You are agreeing to our terms and policies.</p>
                    < NavLink to="/">Login Here</NavLink>

                </form>
            </div>
        </div>
    )
}

export default Account

