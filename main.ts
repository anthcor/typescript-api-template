import express from 'express';
import HealthRouter from './routers/health'

const api = express();
const health = require("./routers/health")
const port = 3000;

api.use(HealthRouter)

api.listen(port, () => {
  console.log(`api is running on port ${port}.`);
});
