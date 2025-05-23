console.log("server in ascolto");

import express from "express"
import birreRouter from "./routers/file/birre.js";
const app = express();
const port = 3000;

app.listen(port, () => {console.log("listen");})
app.use(express.static("public"));
app.use("/posts", birreRouter);

// ROTTE
app.get("/", (req, res) => {
    res.json ({ data: `lista dei miei post`})
});

