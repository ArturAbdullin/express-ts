import { Member } from "./types";

let members: Member[] = require("../../database/members.json");

/**
 * Returns a promise to find all members from the database
 */
const findAll = (): Promise<Member[]> => {
  return new Promise((resolve, reject) => {
    resolve(members);
  });
};

export { findAll };
