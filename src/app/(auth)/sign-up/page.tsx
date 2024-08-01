"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignUp } from "@/actions/user-management";

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
    }
  };

  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <form className="border p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder=""
            className="border p-2"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            className="border p-2"
            autoComplete="new-password"
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
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder=""
            className="border p-2"
            autoComplete="new-password"
          />
          <button type="submit">Submit</button>
          <Link href="/sign-in">I already have an account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
