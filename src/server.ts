import express from "express";
import cors from "cors";

const app = express();

// cross-origin resource sharing
app.use(cors());

export default app;
