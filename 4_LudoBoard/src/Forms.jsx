import { useState } from "react"


export default function Forms() {
    // let [fullName, setFullName] = useState("");
    // let [userName, setUserName] = useState("");
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // };
    // let handleUsername = (event) => {
    //     setUserName(event.target.value);
    // };

    let [FormData, setFormData] = useState ({
        fullName: "",
        userName: "",
        password: ""
    });

    let handleInputChange = (event) => {
        let fieldName = event.target.name;
        let newValue = event.target.value;

        setFormData( (currData) => {
            currData[fieldName] = newValue;
            return{...currData};
        });
    };

    let handleSubmit = (event) => {
        event.preventDefalut();
        setFormData({
            fullName: "",
            userName: "",
            password: ""
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <br /><br /><br /><br />
            <label htmlFor="fullname">Full Name : </label>
            <input placeholder="enter your full name" type="text" id="fullname" name="fullName" value={FormData.fullName} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="username">Userame : </label>
            <input placeholder="enter your username" type="text" id="username" name="userName" value={FormData.userName} onChange={handleInputChange}/>
            <br /><br />
            <label htmlFor="password">Password : </label>
            <input placeholder="enter your password" type="text" id="password" name="password" value={FormData.password} onChange={handleInputChange}/>
            <button>Submit</button>
        </form>
    )
}