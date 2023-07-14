import React, {useState} from "react";
import { Link,useNavigate} from "react-router-dom";

function Signup() {
    const navigate=useNavigate();
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", geolocation: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });


        const json = await response.json();
        console.log(json);
        if (json.success==="ea"){
            alert("Email already present, please login");
        }
        else if (!json.success) {
            alert("Enter valid credentials");
        }
        else{
            localStorage.setItem("userEmail",credentials.email);
            localStorage.setItem("authToken",json.authToken);
            console.log(localStorage.getItem("authToken"));
            navigate("/");
        }
    }

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <>
            <div className="container">
                <div className="mt-2">
                <p className="fs-2" style={{"display":"flex","justify-content":"center"}}><strong>Signup</strong></p>
                </div>
                <form className="m-3" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={credentials.name} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="geolocation" className="form-label">Location</label>
                        <input type="text" className="form-control" id="geolocation" name="geolocation" value={credentials.geolocation} onChange={onChange} />
                    </div>
                    <button type="submit" className="m-3 btn btn-primary">Submit</button>
                    <Link to="/login" className="m-3 btn btn-danger">Already a User</Link>
                </form>
            </div>
        </>
    );
}

export default Signup;