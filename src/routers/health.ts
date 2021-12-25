import express from "express";
import { HealthcheckResponse } from "../types/health";

const router = express.Router();

router.get("/healthcheck", (_req, res) => {
    res.json({ "message": "We're on the air" } as HealthcheckResponse);
});

export default router;