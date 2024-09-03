import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import '../../assets/Login.css';
import { HiCamera } from "react-icons/hi";
import { useUserContext } from "../../../Lib/const/UserContext";

function Register({ users, setUsers }) {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUserDetails } = useUserContext(); 

  const fileInputRef = useRef(null);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Create a new user object
    const newUser = {
      fullName,
      address,
      contact,
      email,
      password,
      profilePic: profilePic ? profilePic : null, // Use the image URL
      role: 'USER'
    };

    // Update users array
    setUsers([...users, newUser]); // Update the users state

    // Set the user details in context
    setUserDetails({
      role: 'USER',
      profilePic: profilePic ? profilePic : null,
      name: fullName,  // Set the name to the full name of the registered user
    });

    // Clear the form and navigate to login
    setFullName('');
    setAddress('');
    setContact('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setProfilePic(null);
    setError('');

    navigate('/login');
  };

  return (
    <div className="form mt-[130px]">
      <form onSubmit={handleRegister}>
        <h1>Sign Up</h1>
        
        {/* Circular profile picture uploader */}
        <div className="input-box">
          <div 
            className="relative w-24 h-24 mx-auto mb-4 overflow-hidden rounded-full cursor-pointer group"
            onClick={() => fileInputRef.current.click()} // Trigger the file input click
          >
            {profilePic ? (
              <img src={profilePic} alt="Profile" className="object-cover w-full h-full" />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-200">
                <HiCamera className="text-3xl text-gray-400" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              ref={fileInputRef} // Attach ref to the file input
              className="hidden"
            />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
              <HiCamera className="text-3xl text-white" />
            </div>
          </div>
        </div>
        
        {error && <p className="error text-[red] text-[12px]">{error}</p>}
        <div className="input-box">
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="flex gap-3 input-box flex-column">
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="flex gap-3 flex-column">
          <div className="input-box">
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm Pwd" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>
        </div>
        
        <button type="submit" className="btn">Register</button>

        <div className="nav">
          <p>Already have an account? <NavLink className='nav-link' to='/login'>Sign In</NavLink></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
