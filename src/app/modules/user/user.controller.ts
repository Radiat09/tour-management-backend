/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status-codes";
import { UserServices } from "./user.service";
import { catchAsync } from "../../utils/catchAsync";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const user = await UserServices.createUserService(req.body);

//     res.status(httpStatus.CREATED).json({
//       message: "User created succesfully!",
//       user,
//     });
//   } catch (error: any) {
//     console.log(error);
//     next(error);
//   }
// };

const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await UserServices.createUserService(req.body);

  res.status(httpStatus.CREATED).json({
    success: true,
    message: "User created succesfully!",
    user,
  });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const users = await UserServices.getAllUsers();

  res.status(httpStatus.OK).json({
    success: true,
    message: "User retrived succesfully!",
    users,
  });
});

export const UserControllers = {
  createUser,
  getAllUsers,
};
