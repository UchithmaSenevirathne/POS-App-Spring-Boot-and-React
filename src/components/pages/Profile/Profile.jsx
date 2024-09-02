import React, { useState, useEffect, useRef } from 'react';
import { HiCamera } from 'react-icons/hi';
import { useUserContext } from '../../../Lib/const/UserContext';

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
    setFullName(user.name);
    setAddress(user.address || '');
    setContact(user.contact || '');
    setEmail(user.email);
    setProfilePic(user.profilePic || '');
  }, [user]);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const updatedUser = {
      ...user,
      name: fullName,
      address,
      contact,
      email,
      password,
      profilePic: profilePic || null,
    };

    // Update the user in context
    setUserDetails(updatedUser);
    
    // Clear the form and error
    setFullName('');
    setAddress('');
    setContact('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setProfilePic('');
    setError('');
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
