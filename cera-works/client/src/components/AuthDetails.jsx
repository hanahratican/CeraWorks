import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";

const styles = {
  welcomeText: {
      position: 'fixed',
      right: '30px',
      justifyContent: 'center',
      paddingRight: '10px',
      paddingLeft: '10px',
      marginTop: '80px',
      backgroundColor: '#d4d4d4',
  },
  button: {
    color: '#F38442',
  }
};

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div style={styles.welcomeText}>
      {authUser ? (
        <>
          <p>{`Welcome, ${authUser.email}!  `}
          <button style={styles.button} onClick={userSignOut}>Sign Out</button>
          </p>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;