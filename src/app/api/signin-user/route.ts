import { NextResponse } from "next/server";
import openDB from "@/lib/db"
import { hash, compare } from 'bcrypt';

export async function POST(req: Request) {
  const database = await openDB();
  try {
    const body = await req.json();

    const { email, password } = body;

    const user = await database.get(
      `SELECT * from USERS WHERE email = ?`, email
    )

    if (!user) {
      return NextResponse.json({ user: null, message: "User not found" }, { status: 404 });
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      return NextResponse.json({ user: null, message: "Invalid password" }, { status: 401 });
    }


    const res = NextResponse.json("User authenticated successfully", { status: 200 });

    res.setCookie('user', user.id, {
      // Cookie options, such as path, maxAge, etc.
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: 'lax',
      // secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    });

    return res;

  } catch (error) {
    // Handle the error here
    console.error(error);
    return NextResponse.json({ error: (error as Error).message }, { status: 409 });
  }
}