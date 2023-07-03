import express from 'express';
import routes from './routes/index';

const app = express();

app.use('/', routes);

app.listen('1245', () => console.log('Server started at port 1245\n', process.argv));

export default app;
