import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signup = async () => {

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      alert("Account Created 🚀");

      window.location.href = "/";

    } catch (error) {

      console.log(error);

      alert("Signup failed");

    }

  };


  return (

    <div className="min-h-screen bg-[#09090B] flex items-center justify-center text-white">


      <div className="w-[380px] bg-zinc-900 border border-zinc-800 rounded-3xl p-8">


        <h1 className="text-3xl font-bold text-center">
          Create Account
        </h1>


        <input

          className="w-full mt-8 p-3 rounded-xl bg-zinc-800 text-white"

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e)=>setEmail(e.target.value)}

        />


        <input

          className="w-full mt-4 p-3 rounded-xl bg-zinc-800 text-white"

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e)=>setPassword(e.target.value)}

        />


        <button

          onClick={signup}

          className="w-full mt-6 p-3 rounded-xl bg-blue-600 hover:bg-blue-700"

        >

          Create Account

        </button>


        <button

          onClick={()=>window.location.href="/login"}

          className="w-full mt-4 text-zinc-400"

        >

          Already have account? Login

        </button>


      </div>


    </div>

  );
}