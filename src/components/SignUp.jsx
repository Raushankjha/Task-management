import axios from "axios";
import { useState } from "react";

const SignUp = () => {
    const [data, setData] = useState({ Email: "", Password: "" });

    function handledata(e) {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }

    async function addData() {
        if (!data.Email || !data.Password) {
            alert('Please fill in all fields');
            return;
        }
        try {
            await axios.post('https://task-management-1ce63-default-rtdb.firebaseio.com/signupData.json', data);
            alert('Sign Up successful!');
        } catch (error) {
            console.error('Error during sign-up:', error);
            alert('Something went wrong. Please try again.');
        }
    }

    return (
        <div className="signup">
            <h2>Sign Up</h2>
            <input
                type="email"
                placeholder="Email"
                name="Email"
                value={data.Email}
                onChange={handledata}
                required
            />
            <input
                type="password"
                placeholder="Password"
                name="Password"
                value={data.Password}
                onChange={handledata}
                required
            />
            <button onClick={addData}>Sign Up</button>
        </div>
    );
};

export default SignUp;
