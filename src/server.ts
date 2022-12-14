import express from "express";
import cors from "cors";
import router from "./routes";

const app = express();

// cross-origin resource sharing
app.use(cors());
app.use(router);

export default app;
