import express from 'express';
import logger from './logger';
import healthRouter from './routers/health';

const api = express();
const PORT = 8000;

api.use(express.json());

api.use(healthRouter);

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
  api.listen(PORT, () => {
    logger.debug(`Server running on port ${PORT}`);
  });
}

export default api;
