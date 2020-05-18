import * as express from 'express';

type Request = typeof express.request;
type Response = typeof express.response;

export { Request, Response };
