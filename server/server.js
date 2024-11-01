import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();
const cors = require('cors');

app.use(cors(
    {
        origin: ['https://mern-employees-client.vercel.app'],
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true
    }
));
app.use(express.json());
app.use("/record", records);

// start the Express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});