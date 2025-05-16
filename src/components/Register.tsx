// // src/components/Register.tsx
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";

// export const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const registerUser = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Registration successful!");
//     } catch (err) {
//       const error = err as Error;
//       alert(error.message);
//     }
//   };

//   return (
//     <form onSubmit={registerUser}>
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
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// // src/components/Register.tsx
// import { useState } from "react";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import "./styles/auth.css"; // make sure this path is correct

// export const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert("Registration successful!");
//     } catch (err) {
//       const error = err as Error;
//       alert("Registration failed: " + error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h3 className="auth-title">Register</h3>
//       <form onSubmit={handleRegister}>
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
//             placeholder="Enter a password"
//           />
//         </div>

//         <button type="submit" className="btn btn-dark auth-btn">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

//// ================= ///
// src/components/Register.tsx
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, googleProvider, facebookProvider } from "../firebase";
import "./styles/auth.css";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Save user to Firestore (if new)
  const ensureUserInFirestore = async (user: any, provider: string) => {
    const userRef = doc(db, "users", user.uid);
    const existing = await getDoc(userRef);

    const [first = "", last = ""] = (user.displayName || "").split(" ");

    if (!existing.exists()) {
      await setDoc(userRef, {
        firstName: first,
        lastName: last,
        phone: "",
        message: "",
        email: user.email,
        uid: user.uid,
        role: "user",
        provider,
      });
    }
  };

  // 🔐 Register with email & password
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        firstName,
        lastName,
        phone,
        message,
        email: user.email,
        uid: user.uid,
        role: "user",
        provider: "email",
      });

      alert("Registration successful!");
    } catch (err) {
      const error = err as any;
      if (error.code === "auth/email-already-in-use") {
        alert("Email already registered. Please log in.");
      } else {
        alert("Registration failed: " + error.message);
      }
    }
  };

  // 🔐 Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await ensureUserInFirestore(user, "google");
      alert("Signed in with Google!");
    } catch (err) {
      alert("Google sign-in failed.");
      console.error(err);
    }
  };

  // 🔐 Facebook Sign-In
  const handleFacebookSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      const user = result.user;
      await ensureUserInFirestore(user, "facebook");
      alert("Signed in with Facebook!");
    } catch (err) {
      alert("Facebook sign-in failed.");
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h3 className="auth-title">Register</h3>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            className="form-control"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-dark auth-btn mb-3">
          Register
        </button>
      </form>

      <hr />
      <button
        className="btn btn-outline-danger w-100 mb-2"
        onClick={handleGoogleSignIn}
      >
        Continue with Google
      </button>

      <button
        className="btn btn-outline-primary w-100"
        onClick={handleFacebookSignIn}
      >
        Continue with Facebook
      </button>
    </div>
  );
};
