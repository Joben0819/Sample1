import React,{useState, useEffect} from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from '../Component/Firebase/Config'
import { getAuth, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
function Settings() {

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app); // Get the Auth instance
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, [auth]);
  
  
    const handleSignIn = async () => {
      // Use the authentication provider of your choice (Google, Facebook, etc.)
      try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
    console.warn(user)
  return (
    <div>
        <h1> Settings</h1>
        {user ? (
        <div>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <h1>Please Sign In</h1>
          <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
      )}
    </div>
  )
}

export default Settings