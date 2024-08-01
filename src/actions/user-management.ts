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
    const { email, username, password } = userSchema.parse(userData);

    const existingUserByEmail = await database.all(
      `SELECT email from USERS where email = ?`, email
    );

    const existingUserByUsername = await database.all(
      `SELECT username from USERS where username = ?`, username
    );

    if (existingUserByEmail.length > 0) {
      return {error: "Email already exists", status: 409};
    }

    if (existingUserByUsername.length > 0) {
      return {error: "Username already exists", status: 409};
    }

    const hashedPassword = await hash(password, 10);
    await database.run(
      `INSERT INTO USERS(email, username, password) VALUES (?, ?, ?)`, email, username, hashedPassword
    );

    const newUser = await database.get(
      `SELECT * FROM USERS WHERE email = ?`, email
    );

    return {user: newUser, message: "User created successfully", status: 200};
  } catch(error) {
    // Handle the error here
    console.error(error);
    return {error: "Error"}
  }
}