"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"
import Link from "next/link";

const SignUpForm = () => {
  // Corrected function declaration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signup-user/", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      router.push("/sign-in");

    } else {
      const error = await response.json();
      console.error(error);
    }
  }


  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <form className="border p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="border p-2"
          />
          <label htmlFor="username">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            className="border p-2"
          />
          <button type="submit">Submit</button>
          <Link href="/sign-up">I don't have an account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;