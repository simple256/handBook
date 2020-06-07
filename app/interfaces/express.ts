import * as express from 'express';
import { Document } from 'mongoose';

type Request = typeof express.request;
type Response = typeof express.response;

interface IRequest extends Request {
  currentUser: Document;
}

export { IRequest as Request, Response };
