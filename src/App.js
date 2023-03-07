import "./App.css";
import initializeAutentication from "./Firebase/Firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";
import { useState } from "react";

initializeAutentication();
const gogleSignInProvider = new GoogleAuthProvider();
const githubSignInProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState("");
  const handleGogleSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, gogleSignInProvider).then((result) => {
      const { displayName } = result.user;
      const loginuser = {
        name: displayName,
      };
      setUser(loginuser);
    });
  };
  const handleGithubSignin = () => {
    const auth = getAuth();
    signInWithPopup(auth, githubSignInProvider).then((result) => {
      const { displayName } = result.user;
      const loginuser = {
        name: displayName,
      };
      setUser(loginuser);
    });
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth).then(() => {});
    setUser({});
  };
  return (
    <div className="App">
      <h2>hello</h2>
      {!user.name ? (
        <div>
          <button onClick={handleGogleSignin}>gogle sign In</button>
          <button onClick={handleGithubSignin}> Github Sign In</button>{" "}
        </div>
      ) : (
        <button onClick={handleSignOut}> SignOut</button>
      )}

      <br />
      <br />
      {user.name && (
        <div>
          <h3> Welcome {user.name} .SuccessFully Login...</h3>
        </div>
      )}
    </div>
  );
}

export default App;
