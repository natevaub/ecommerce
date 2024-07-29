"use server"
import { NextResponse } from "next/server";
import openDB from "@/lib/db"
import { hash } from 'bcrypt';
import {userSchema} from "./utils";

export async function SignUp(userData : {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}) {
  const database = await openDB();
  try {
    // const body = await req.json();

    const { email, username, password } = userSchema.parse(userData);

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