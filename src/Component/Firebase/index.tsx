import React,{useState, useEffect} from 'react'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {firebaseConfig} from './Config'
import { getAuth, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { setName } from '../../reducers/counter';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
// import { RootState } from '../../store/index';
function Firebase() {
    const dispatch = useDispatch()
    // const names = useSelector((state: RootState) => setName(state.name));
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth(app); // Get the Auth instance
    const [user, setUser] = useState<User | null>(null);
    const { name } = useSelector((state: RootState) => state.counter);
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setUser(user);
        if (user?.email) {
          dispatch(setName({ key: 'someKey', value: user.email }));
          
        }
        else{
          dispatch(setName({ key: 'someKey', value: 'undefined' }));
        }
      });
  
      // Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, [auth]);
  
  
    const handleSignIn = async () => {
      // Use the authentication provider of your choice (Google, Facebook, etc.)
      try {
        const provider = new GoogleAuthProvider();
        
        await signInWithPopup(auth, provider);
        window.location.reload()
      } catch (error) {
        // console.error('Error signing in:', error);
      }
    };
  
    const handleSignOut = async () => {
      try {
        await auth.signOut();
      } catch (error) {
        // console.error('Error signing out:', error);
      }
    };
  return (
    <div>
        {user ? (
        <div>
          <h5>{!user ? "" : user.displayName}!</h5>
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

export default Firebase