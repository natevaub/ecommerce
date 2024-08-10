"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignUp } from "@/actions/user-management";
import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  // Corrected function declaration
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await SignUp({
      username,
      email,
      password,
      confirmPassword,
    });

    if (response.status === 200) {
      router.push("/sign-in");
    } else {
      console.log(response);
    }
  };

  const divStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: "0.5rem 0",
  };

  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <form className="w-[400px] border p-8 rounded-lg" onSubmit={handleSubmit}>
        <div className="flex justify-center">
          <Link href="/" className="amplify-font text-[3rem]">
            Gear Paradise
          </Link>
        </div>

        <div className="flex justify-center">
            <Link href="/sign-in" className="underline">I already have an account</Link>
        </div>

        <div style={divStyle}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=""
            className="border p-2 rounded-lg"
          />
        </div>

        <div style={divStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="border p-2 rounded-lg"
            autoComplete="new-password"
          />
        </div>

        <div style={divStyle}>
          <label htmlFor="username">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
            className="border p-2 rounded-lg"
          />
        </div>

        <div style={divStyle}>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=""
            className="border p-2 rounded-lg"
            autoComplete="new-password"
          />
        </div>

        <div className="my-[1rem]">
          <Button type="submit" className="h-[3rem] w-full">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
