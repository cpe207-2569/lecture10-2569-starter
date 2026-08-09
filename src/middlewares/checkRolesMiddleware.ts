import { type Request, type Response, type NextFunction } from "express";
import { type CustomRequest, type User } from "../libs/types.ts";
import { users, reset_users } from "../db/db.ts";

// interface CustomRequest extends Request {
//   user?: any; // Define the user property
//   token?: string; // Define the token property
// }

export const checkRoles = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  // get payload and token from (custom) request
  const payload = req.user;
  const token = req.token;

  // find user by payload.username
  const user = users.find((u: User) => u.username === payload?.username);

  // check if user is admin
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized user",
    });
  }

  // check if token exists in user.tokens
  if (
    !user.tokens ||
    typeof token !== "string" ||
    !user.tokens.includes(token)
  ) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  // Proceed to next middleware or route handler
  next();
};
