import React from "react";
import "../css/Modal1.css"
import axios from "axios";

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
                    <button style={{ backgroundColor: "rgb(59,84,148)" }}>CONTINUE WITH FACEBOOK</button>
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