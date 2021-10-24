import express from "express";
import { randomString } from "../../Shared/dist/utils";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello worldddsdd!" + randomString());
});

export default app;
