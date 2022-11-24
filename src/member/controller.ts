import { RequestHandler } from "express";
import * as Members from "./model";

/**
 * Response with all the entries from the members database
 * @param req request
 * @param res response
 * @param next callback argument to the middleware function
 */
const getAllMembers: RequestHandler = async (req, res, next) => {
  try {
    res.json(await Members.findAll());
  } catch (err) {
    console.error(`Error while getting members`);
    next(err);
  }
};

export { getAllMembers };
