import { Router } from 'express';
import {getUsers, login, registration} from "./authController";
import {getCategories} from "../category/repository";
import {StatusCodes} from "../common";
import { auth } from './auth';

const authrouter = Router();


authrouter.post('/login', login)
authrouter.post('/registration', registration)
authrouter.get ('/users', getUsers);


export default authrouter;
