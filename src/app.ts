import express from 'express';
import routes from './routes';
import errorHandler from './error/handler';
import registerHelpers from './middleware/register-helpers';

export default express()
  .use(registerHelpers)
  .use('/api/v1', routes)
  .use(errorHandler);
