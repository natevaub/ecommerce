"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SignIn } from "@/actions/user-management";

const SignUpForm = () => {
  // Corrected function declaration
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await SignIn({
      username,
      password,
    });

    if (response.status === 200) {
      router.push("/");
      console.log(response);
    }
    else {
      console.log(response);
    }
  };

  return (
    <div className="flex w-[100vw] h-[100vh] justify-center items-center">
      <form className="border p-8" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="username">Username or email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <Link href="/sign-in">I don't have an account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
