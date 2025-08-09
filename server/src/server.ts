import app from "./app.ts";
import type { Request, Response } from 'express'


const PORT = process.env.PORT || 3000;


app.get("/", (req: Request, response: Response) => {
    response.send("welcome")
})

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
})