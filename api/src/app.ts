import express, { urlencoded, Request, Response } from 'express';
import databaseService from './services/databaseService';
import config from './config';

import apiRoute from './routes/api';

const app = express();
const port = config.API_PORT;

databaseService.catch(err => {
    process.exit(1);
});

app.use(urlencoded({ extended: true }));

app.use('/api', apiRoute );

app.get('/', (req: Request, res: Response) => res.send('API is running...'));
app.listen(port, () => console.log(`App is listening on port ${port}`));