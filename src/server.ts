import express from "express";
import cors from "cors";

const server = express();

// cross-origin resource sharing
server.use(cors());

export default server;
