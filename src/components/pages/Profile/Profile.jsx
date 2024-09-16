import React, { useState, useEffect, useRef } from 'react';
import { HiCamera } from 'react-icons/hi';
import { useUserContext } from '../../../Lib/const/UserContext';
import axios from 'axios';

function Profile() {
  const { user, setUserDetails } = useUserContext();
  const [fullName, setFullName] = useState(user.name);
  const [address, setAddress] = useState(user.address || '');
  const [contact, setContact] = useState(user.contact || '');
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(user.profilePic || '');
  const [error, setError] = useState('');

  const fileInputRef = useRef(null); // Ensure fileInputRef is defined

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        console.log(user.email)
        const userEmail = user.email
        const response = await axios.get(`http://localhost:8080/backend/user/details?email=${userEmail}`);
        if (response.data) {
          console.log(response.data)
          setFullName(response.data.name);
          setAddress(response.data.address);
          setContact(response.data.contact);
          setEmail(response.data.email);
          setProfilePic(response.data.profilePicture);
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };
    
    fetchUserDetails();
  }, [user.email]);
  

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
  
    const formData = new FormData();
    formData.append('name', fullName);
    formData.append('address', address);
    formData.append('contact', contact);
    formData.append('email', email);
    formData.append('password', password);
    if (profilePic) {
      formData.append('profilePicture', profilePic);
    }
  
    try {
      await axios.put(`/backend/user/${user.userId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      // Optionally update the context with the new user details
      setUserDetails({
        ...user,
        name: fullName,
        address,
        contact,
        email,
        profilePic,
      });
      alert("Profile updated successfully");
    } catch (error) {
      console.error("Failed to update profile", error);
      setError('Failed to update profile');
    }
  };
  

  return (
    <div className="flex justify-center mt-10 profile-form">
      <form onSubmit={handleSave} className='w-full px-60'>
        <div className='flex gap-10'>
        <div className="input-box">
          <div 
            className="relative mx-auto mb-4 overflow-hidden rounded-full cursor-pointer w-60 h-60 group"
            onClick={() => {
              console.log('fileInputRef.current:', fileInputRef.current); // Debugging line
              if (fileInputRef.current) {
                fileInputRef.current.click();
              }
            }}
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
              ref={fileInputRef} // Ensure ref is attached
              className="hidden"
            />
          </div>
        </div>
        <div className='flex-1'>
        {error && <p className="error text-[red] text-[12px]">{error}</p>}
        <div className="input-box">
          <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div className="flex gap-3 input-box flex-column">
          <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="flex gap-3 flex-column">
          <div className="input-box">
            <input type="password" placeholder="New Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn bg-[orange] text-white py-2 px-3 rounded-md mt-5">Save Changes</button>
        </div>
        </div>
      </form>
    </div>
  );
}

export default Profile;
