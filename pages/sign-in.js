import React, { useEffect, useState } from "react";
import axios from "axios";

const INITIAL_USER = {
	email: "",
	password: ""
}

export default function SignIN() {

    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = "http://localhost:3000/api/user/sign-in";

        const response = await axios.post(url, requestBody);

        console.log(JSON.stringify(response.data));
    }

    const handleChange = (e) => {
		const { name, value } = e.target;
		setRequestBody((prevState) => ({ ...prevState, [name]: value }));
	};

    return(
        <form onSubmit={handleSubmit} method="POST">
            <div className="space1">
                <h2 className="sub-heading">USERNAME</h2>
                <div className="space2">
                    <input className="input" name="email" value={requestBody.email} onChange={handleChange} type="text" placeholder="username/email" size="30"/>
                </div>
            </div>
            <div className="space1">
                <h2 className="sub-heading">PASSWORD</h2>
                <div className="space2">
                    <input className="input" name="password" value={requestBody.password} onChange={handleChange} type="password" placeholder="password" size="30" />
                </div>
            </div>
            <input className="boton" type="submit" value="LOGIN" />
        </form>
    );
}
