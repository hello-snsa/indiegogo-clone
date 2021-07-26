import React from "react";
import "../css/Modal1.css"
import axios from "axios";
import { Link } from "react-router-dom";

function Modal1({ setOpenModal1, setOpenModal }) {
    const [firstname, setfirstname] = React.useState("")
    const [lastname, setlastname] = React.useState("")
    const [email, setemail] = React.useState("")
    const [password, setpassword] = React.useState("")
    const [datas, setData] = React.useState("")
    
    
      React.useEffect(() => {
        getUsers();
    },[])

    const getUsers = async () => {
        try {
            const { data } = await axios.get(" http://localhost:3031/users")
            console.log(data)
            setData(data)
          
        }
        catch (err) {
            console.log(err)
        }


    }    


    const addUsers = (firstname,email,lastname,password) => {
        const payload = {
            firstname,
            lastname,
            email,
            password,
        }

        axios.post("http://localhost:3031/users", payload)
            .then(() => {
                return console.log(payload);
            })
            .catch((err) => {
                console.log(err)
            });
        
    }
    
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal1(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <div className="title">
                    <h1>Welcome!</h1>
                    <h9>Sign up to join Indiegogo.</h9>
                </div>
                <div style={{display:"flex" , flexDirection:"column"}} className="body">
                    <h9 className="body-h9">First Name</h9>
                    <input type="text" placeholder="Your First Name"
                    onChange={(e) => {setfirstname(e.target.value)}}></input>
                    <h9 className="body-h9">Last Name</h9>
                    <input type="text" placeholder="Your Last Name" onChange={(e) => {setlastname(e.target.value)}}></input>
                    <h9 className="body-h9">Email</h9>
                    <input type="email" placeholder="Your Email" onChange={(e) => {setemail(e.target.value)}}></input>
                    <h9 className="body-h9">Password</h9>
                    <input type="password" placeholder="Your Password" onChange={(e) => {setpassword(e.target.value)}}></input>
                    <h4 className="body-h91">
                        <input type="checkbox" className="checkbox"></input>
                        Sign me up for the Indiegogo newsletter
                    </h4>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        setOpenModal1(false);
                        setOpenModal(true);
                        addUsers(firstname,email,lastname,password)
                        }}>
                        CREATE ACCOUNT
                    </button>
                    <h2>OR</h2>
            <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=2392863781&kid_directed_site=0&app_id=2392863781&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv6.0%2Fdialog%2Foauth%3Fclient_id%3D2392863781%26redirect_uri%3Dhttp://localhost:3000/forentrepreneurs%252Faccounts%252Fauth%252Ffacebook%252Fcallback%26response_type%3Dcode%26scope%3Demail%252Cuser_friends%26state%3D45467027fde4d861a99133827033b5e5849ea29a8890460d%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Df9c9963b-f698-4172-bf11-35206705ffe4%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fhttp://localhost:3000/forentrepreneurs%2Faccounts%2Fauth%2Ffacebook%2Fcallback%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D45467027fde4d861a99133827033b5e5849ea29a8890460d%23_%3D_&display=page&locale=hi_IN&pl_dbl=0">
            
                    <button style={{ backgroundColor: "rgb(59,84,148)" }}>CONTINUE WITH FACEBOOK</button>

                   </a> 
                    <br/>
                    <h9>No post without your permission</h9>
                    <h4>Already have an account?<span onClick={() => {
                        setOpenModal1(false);
                        setOpenModal(true)
                        }}>Log in</span></h4>
                </div>
            </div>
        </div>
    );
}

export default Modal1;