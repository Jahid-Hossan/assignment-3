import catchAsync from "../Utils/catchAsync"
import { NextFunction, Response } from 'express';
import { Request } from 'express';

const auth=()=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        const token = req.headers.authorization;

        if (!token) {
            throw new Error("You are not authorized");
            
        }
    })
}