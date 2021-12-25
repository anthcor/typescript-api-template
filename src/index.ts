import express from 'express';
import healthRouter from './routers/health';

const api = express();
const PORT = 3000;

api.use(express.json());

api.use(healthRouter);

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  /* istanbul ignore next */
  api.listen(PORT, () => {
    /* istanbul ignore next */
    console.log(`Server running on port ${PORT}`);
  });
}

export default api;
