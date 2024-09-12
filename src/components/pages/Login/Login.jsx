// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/Login.css';
// import { NavLink } from 'react-router-dom';
// import { useUserContext } from '../../../Lib/const/UserContext';

// function Login({ users = [], setCurrentUser }) {  // Pass users array as a prop
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { setUser } = useUserContext(); // Destructure setUser from useUserContext

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (email === 'iman@gmail.com' && password === 'abcd') {
//       setError('');
//       setCurrentUser({ role: 'ADMIN', profilePic: null, name: 'Admin' });
//       setUser({ role: 'ADMIN', profilePic: null, name: 'Admin' }); // Set user context
//       navigate('/layout'); // Admin role
//     } else {
//       const user = users.find(user => user.email === email && user.password === password);

//       if (user) {
//         setError('');
//         setCurrentUser(user); // Set the logged-in user
//         setUser(user); // Set user context

//          // Retrieve the stored user data
//       const storedUser = JSON.parse(localStorage.getItem('user'));
//       if (storedUser && storedUser.email === email) {
//         setUser({ ...user, name: storedUser.fullName });
//       }

//         navigate('/layout');
//       } else {
//         setError('Invalid email or password.');
//       }
//     }
//   };

//   return (
//     <div className='form mt-[250px]'>
//       <form onSubmit={handleLogin}>
//         <h1>Sign In</h1>
//         {error && <p className='error text-[red] text-[12px]'>{error}</p>}
//         <div className='input-box'>
//           <input type="email" placeholder='Username' required value={email} onChange={(e) => setEmail(e.target.value)} />
//         </div>
//         <div className='input-box'>
//           <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>

//         <div className='remember'>
//           <label><input type="checkbox" className="checkbox-round" />Remember me</label>
//           <a href="#">Forgot password?</a>
//         </div>

//         <button type='submit'>Login</button>

//         <div className='nav'>
//           <p>Don't have an account? <NavLink className='nav-link' to='/register'>Sign Up</NavLink></p>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios for API requests
import { NavLink } from "react-router-dom";
import { useUserContext } from "../../../Lib/const/UserContext";
import "../../assets/Login.css";

function Login({ setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserContext(); // Destructure setUser from useUserContext

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Send login credentials to the backend
      const response = await axios.post(
        "http://localhost:8080/backend/user/authenticate",
        {
          email,
          password,
        }
      );

      // If login is successful, extract token and email from the response
      if (response.status === 201) {
        const { token, email: loggedInEmail, role } = response.data.data;

        console.log(role)

        // Fetch user details from the backend using the email
        const userDetailsResponse = await axios.get(
          `http://localhost:8080/backend/user/details?email=${loggedInEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`, // Include token in headers
            },
          }
        );

        if (userDetailsResponse.status === 200) {
          const { name: fullName, profilePicture } = userDetailsResponse.data;

          // Set user details in the context and localStorage
          const userData = {
            email: loggedInEmail,
            name: fullName,
            profilePic: profilePicture ? `data:image/jpeg;base64,${profilePicture}` : null, // Assuming base64 encoding
            role: role
          };

          // Update UserContext and local state
          setUser(userData);
          setCurrentUser(userData);

          // Save the user details to localStorage
          localStorage.setItem("user", JSON.stringify(userData));

          // Redirect to the dashboard (or any protected route)
          navigate("/layout");
        } else {
          setError("Failed to fetch user details.");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (error) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="form mt-[250px]">
      <form onSubmit={handleLogin}>
        <h1>Sign In</h1>
        {error && <p className="error text-[red] text-[12px]">{error}</p>}
        <div className="input-box">
          <input
            type="email"
            placeholder="Username"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="remember">
          <label>
            <input type="checkbox" className="checkbox-round" />
            Remember me
          </label>
          <a href="#">Forgot password?</a>
        </div>

        <button type="submit">Login</button>

        <div className="nav">
          <p>
            Don't have an account?{" "}
            <NavLink className="nav-link" to="/register">
              Sign Up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;

