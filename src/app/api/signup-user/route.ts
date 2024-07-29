import { NextResponse } from "next/server";
import openDB from "@/lib/db"
import { hash } from 'bcrypt';
import * as z from 'zod'

// Define a schema for input validation
export const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
  confirmPassword: z.string().min(1, "Password confirmation is required"),
})
.refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Password do not match",
});

export async function POST(req: Request) {
  const database = await openDB();
  try {
    const body = await req.json();

    const { email, username, password } = userSchema.parse(body);

    const existingUserByEmail = await database.all(
      `SELECT email from USERS where email = ?`, email
    );

    const existingUserByUsername = await database.all(
      `SELECT username from USERS where username = ?`, username
    );

    if (existingUserByEmail.length > 0) {
      return NextResponse.json({user: null, message: "Email already exist", existingUserByEmail}, {status: 409});
    }

    if (existingUserByUsername.length > 0) {
      return NextResponse.json({user: null, message: "Username already exist"}, {status: 409});
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await database.all(
      `INSERT INTO USERS(email, username, password) VALUES (?, ?, ?)`, email, username, hashedPassword
    );

    return  NextResponse.json({ user: newUser, message: "User created successfully"}, {status: 201});
  } catch(error) {
    // Handle the error here
    console.error(error);
    return NextResponse.json({ error: (error as Error).message}, {status: 409});
  }
}