"use server"
import openDB from "@/lib/db"
import { hash, compare } from 'bcrypt';
import { userSchema } from "./utils";
import { sign, JwtPayload } from "jsonwebtoken"
import { cookies } from 'next/headers'
import Navbar from '../components/Navbar'
import { jwtDecode } from "jwt-decode";

const JWT_SECRET = process.env.JWT_SECRET;
console.log("Process .env", JWT_SECRET);

async function createSession(userId: number) {
  const database = await openDB();
  const sessionId = crypto.randomUUID();
  await database.run(
    `INSERT INTO SESSIONS(user_id, session_id) VALUES (?, ?)`,
    userId, sessionId
  )
  return sessionId;
}

export async function getSession(sessionId: string) {
  const database = await openDB();
  const session = await database.get(
    `SELECT * FROM SESSIONS WHERE session_id = ?`, sessionId
  )
  return session;
}

export async function SignUp(userData: {
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
      return { error: "Email already exists", status: 409 };
    }

    if (existingUserByUsername.length > 0) {
      return { error: "Username already exists", status: 409 };
    }

    const hashedPassword = await hash(password, 10);
    await database.run(
      `INSERT INTO USERS(email, username, password) VALUES (?, ?, ?)`, email, username, hashedPassword
    );

    const newUser = await database.get(
      `SELECT * FROM USERS WHERE email = ?`, email
    );

    return { user: newUser, message: "User created successfully", status: 200 };
  } catch (error) {
    // Handle the error here
    console.error(error);
    return { error: "Error" }
  }
}

export async function SignIn(userData: {
  username?: string;
  email?: string;
  password: string;
}) {
  const database = await openDB();
  try {
    const { email, username, password } = userData;

    const existingUserByEmailOrUsername = await database.all(
      `SELECT * from USERS where email = ? or username = ?`, [email, username]
    );

    console.log("Existing user by email", existingUserByEmailOrUsername);

    if (existingUserByEmailOrUsername.length === 0) {
      return { error: "No users entries for this email or username already exists", status: 404 };
    }

    // const { password: hashedPassword, id} = await database.get(
    //   `SELECT password, id from USERS where email = ? or username = ?`, [email, username]
    // )

    console.log(existingUserByEmailOrUsername[0].password);

    const isPasswordCorrect = await compare(password, existingUserByEmailOrUsername[0].password);

    if (!isPasswordCorrect) {
      return { error: "Incorrect password", status: 401 };
    }

    // Generate JWT
    const jwtPayload = { userId: existingUserByEmailOrUsername[0].id, username: existingUserByEmailOrUsername[0].username };
    const token = JWT_SECRET ? sign(jwtPayload, JWT_SECRET, { expiresIn: '48h' }) : '';

    console.log(token);
    // Create session
    const sessionId = await createSession(existingUserByEmailOrUsername[0].id);

    // Generate JWT token and session ID in cookies
    const jwtCookie = cookies();
    jwtCookie.set('token', token, { httpOnly: true, path: '/' })

    const sessionCookie = cookies();
    sessionCookie.set('session_id', sessionId, { httpOnly: true, path: '/' })

    return { message: "User logged in successfully", status: 200 };
  } catch (error) {
    // Handle the error here
    console.error(error);
    return { error: "Error" }
  }
}

export async function getMe() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value || null;

  if (token) {
    try {
      const decoded = jwtDecode<{ userId: number; username: string }>(
        token
      );
      return decoded;
    } catch (error) {
      console.error("Error decoding token", error);
      return null;
    }
  }
  return null;
}
