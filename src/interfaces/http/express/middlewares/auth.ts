import jwt, { JwtPayload } from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

export interface CustomRequest extends Request {
  token: string | JwtPayload
}

export default class Auth {
  public static async auth(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.header('Authorization')?.replace('Bearer ', '')

      if (!token) {
        throw new Error()
      }

      (req as CustomRequest).token = jwt.verify(token, process.env.SECRET_KEY)

      next()
    } catch (error) {
      res.status(401).send('Access denied, please register one account or make login.')
    }
  }
}