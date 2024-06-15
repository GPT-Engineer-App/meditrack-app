import React, { useState, useEffect } from 'react';
import { auth } from '../firebaseConfig';
import { getFirestore, doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const db = getFirestore();
        const userDoc = doc(db, 'users', currentUser.uid);
        const userProfile = await getDoc(userDoc);
        if (userProfile.exists()) {
          setProfile(userProfile.data());
        }
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const db = getFirestore();
        const userDoc = doc(db, 'users', user.uid);
        await updateDoc(userDoc, profile);
        setMessage('Profile updated successfully!');
      } catch (error) {
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">User Profile</h1>
      {user ? (
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </form>
      ) : (
        <p>Please log in to view and edit your profile.</p>
      )}
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default UserProfile;