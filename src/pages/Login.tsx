import { useState } from "react";
import { auth } from "../firebase";

import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      alert("Login Successful 🚀");

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      alert("Google Login Successful 🚀");

      window.location.href = "/";
    } catch (error) {
      console.log(error);
      alert("Google Login Failed");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      alert("Enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);

      alert("Password reset email sent.");
    } catch (error) {
      console.log(error);
      alert("Unable to send reset email.");
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] flex items-center justify-center text-white">

      <div className="w-[420px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-3xl font-bold text-center">
          Login to MANTRA OS
        </h1>

        <input
          className="w-full mt-8 p-3 rounded-xl bg-zinc-800 outline-none"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full mt-4 p-3 rounded-xl bg-zinc-800 outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full mt-6 p-3 rounded-xl bg-blue-600 hover:bg-blue-700"
        >
          Login
        </button>

        <button
          onClick={handleGoogle}
          className="w-full mt-4 p-3 rounded-xl border border-zinc-700 hover:bg-zinc-800"
        >
          Continue with Google
        </button>

        <button
          onClick={handleForgotPassword}
          className="w-full mt-4 text-blue-400"
        >
          Forgot Password?
        </button>

        <button
          onClick={() => (window.location.href = "/signup")}
          className="w-full mt-2 text-zinc-400"
        >
          Create New Account
        </button>

      </div>

    </div>
  );
}