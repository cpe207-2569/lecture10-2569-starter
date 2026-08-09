import { Router, type Request, type Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

import type { User, CustomRequest } from "../libs/types.ts";

// import authentication middleware
import { authenticateToken } from "../middlewares/authenMiddleware.ts";
import { checkRoleAdmin } from "../middlewares/checkRoleAdminDBMiddleware.ts";
import { checkRoles } from "../middlewares/checkRolesDBMiddleware.ts";

// Password
import { comparePassword } from "../utils/compare.ts";
import { hashPassword } from "../utils/hash.ts";

// import database


// Validators
import { zUserBody } from "../libs/zodValidators.ts";

const router = Router();

// GET /api/v3/users

// GET /api/v3/users/:userId

// POST /api/v3/users

// POST /api/v3/users/login

// POST /api/v3/users/logout

// DELETE /api/v3/users

export default router;
