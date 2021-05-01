import express, { Request, Response } from "express"

var HealthRouter = express.Router()

HealthRouter.get("/healthcheck", (req: Request, res: Response) => {
    res.json({ "message": "We're on the air" })
})

export default HealthRouter