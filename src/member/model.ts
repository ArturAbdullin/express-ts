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

/**
 * Returns a promise to find a member in the database by id
 * @param id member id
 * @returns Promise
 */
const findById = (id: string): Promise<Member> => {
  return new Promise((resolve, reject) => {
    const member = members.find((m) => m.id === id);
    if (member) resolve(member);
    else reject("member not found");
  });
};

export { findAll, findById };
