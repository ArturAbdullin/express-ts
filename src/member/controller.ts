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

/**
 * Response with the specified entry in the members database
 * @param req request
 * @param res response
 * @param next callback argument to the middleware function
 */
const getMember: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    res.json(await Members.findById(req.params.id));
  } catch (err) {
    res.status(404);
    next(`can't find member with the id of ${req.params.id}`);
  }
};

export { getAllMembers, getMember };
