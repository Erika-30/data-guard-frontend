import * as db from "../db";
import { User, UserData } from "../models/User";
import bcrypt from "bcrypt";

export async function createUserInDB(user: UserData): Promise<User> {
  const query =
    "INSERT INTO users (username, password, email, firstname, lastname, role) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const queryParams: (string | number | boolean)[] = [
    user.username,
    hashedPassword,
    user.email || "",
    user.firstname,
    user.lastname,
    user.role || "user",
  ];
  const result = await db.query(query, queryParams);
  return result.rows[0];
}

export async function getUserByUsernameFromDB(username: string): Promise<User> {
  const query = "SELECT * FROM users WHERE username = $1";
  const queryParams = [username];
  const result = await db.query(query, queryParams);
  return result.rows[0];
}
