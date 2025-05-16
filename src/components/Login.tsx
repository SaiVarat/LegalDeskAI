// // src/components/Login.tsx
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const loginUser = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful!");
//     } catch (err) {
//       const error = err as Error;
//       alert(error.message);
//     }
//   };

//   return (
//     <form onSubmit={loginUser}>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// src/components/Login.tsx
// import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import "./styles/auth.css";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert("Login successful!");
//     } catch (err) {
//       const error = err as Error;
//       alert("Login failed: " + error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h3 className="auth-title">Login</h3>
//       <form onSubmit={handleLogin}>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//           />
//         </div>

//         <button type="submit" className="btn btn-dark auth-btn">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// ================================= //

// src/components/Login.tsx
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, googleProvider, facebookProvider } from "../firebase";
import "./styles/auth.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ensureUserInFirestore = async (
    user: any,
    source: "email" | "google" | "facebook"
  ) => {
    const userRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      const [firstName = "", lastName = ""] = (user.displayName || "").split(
        " "
      );
      await setDoc(userRef, {
        firstName,
        lastName,
        phone: "",
        message: "",
        email: user.email,
        uid: user.uid,
        role: "user",
        provider: source,
      });
    }
  };

  // ✅ Email & Password Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      await ensureUserInFirestore(user, "email");

      alert("Login successful!");
    } catch (err) {
      const error = err as any;
      if (error.code === "auth/user-not-found") {
        alert("No account found. Please register.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      await ensureUserInFirestore(user, "google");

      alert("Google login successful!");
    } catch (err) {
      alert("Google login failed.");
      console.error(err);
    }
  };

  // ✅ Facebook Login
  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;

      await ensureUserInFirestore(user, "facebook");

      alert("Facebook login successful!");
    } catch (err) {
      alert("Facebook login failed.");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h3 className="auth-title">Login</h3>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-dark auth-btn mb-3">
          Login
        </button>
      </form>

      <hr />
      <button
        className="btn btn-outline-danger w-100 mb-2"
        onClick={handleGoogleLogin}
      >
        Continue with Google
      </button>

      <button
        className="btn btn-outline-primary w-100"
        onClick={handleFacebookLogin}
      >
        Continue with Facebook
      </button>
    </div>
  );
};
