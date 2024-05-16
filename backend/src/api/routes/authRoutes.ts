import { Router, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { RequestHandler } from "express";
import {
  createUser,
  validateUserCredentials,
} from "../../services/auth.service";
import { UserSchema } from "../../models/User";

const authRouter = Router();
const jwtSecret = process.env["JWT_SECRET"] || "your-secret-key";

// Middleware para validar el cuerpo del POST con Zod
const validateUser: RequestHandler = (req, res, next) => {
  const result = UserSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, error: result.error });
    return;
  }
  req.body = result.data;
  next();
};

// POST /auth/signup - Create a new user
authRouter.post(
  "/signup",
  validateUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await createUser(req.body);
      res
        .status(201)
        .json({ ok: true, message: "User created successfully", data: user });
    } catch (error) {
      next(error);
    }
  }
);

// POST /auth/login - Authenticate a user
authRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const user = await validateUserCredentials(username, password);
      const payload = { user };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
      res.json({ ok: true, message: "Login successful", token });
    } catch (error) {
      next(error);
    }
  }
);

export default authRouter;
