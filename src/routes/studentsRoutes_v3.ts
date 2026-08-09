import { Router, type Request, type Response } from "express";
import {
  zStudentPostBody,
  zStudentPutBody,
  zStudentId,
} from "../libs/zodValidators.js";

import type { Student, CustomRequest } from "../libs/types.js";

// import authentication middleware
import { authenticateToken } from "../middlewares/authenMiddleware.ts";
import { checkRoleAdmin } from "../middlewares/checkRoleAdminDBMiddleware.ts";
import { checkRoles } from "../middlewares/checkRolesDBMiddleware.ts";

// import database

const router = Router();

// GET /api/v3/students
// get students (by program)

// GET /api/v3/students/{studentId}

// POST /api/v3/students, body = {new student data}
// add a new student

// PUT /api/v3/students, body = {studentId}
// Update specified student

// DELETE /api/v3/students, body = {studentId}

export default router;
