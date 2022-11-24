import { Member } from "./types";
import { writeDataToFile } from "../utils";

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
    else reject(new Error("member not found"));
  });
};

const removeEntry = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (members.some((m) => m.id === id)) {
      members = members.filter((m) => m.id !== id);
      writeDataToFile("./database/members.json", members);
      resolve(true);
    } else {
      reject(new Error("member not found"));
    }
  });
};

export { findAll, findById, removeEntry };
