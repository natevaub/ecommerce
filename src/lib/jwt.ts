import { JwtPayload, verify } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
console.log("Process .env", JWT_SECRET);

export function verifyToken(token: string): JwtPayload | null {
  try {
    return verify(token, JWT_SECRET) as JwtPayload;
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
}