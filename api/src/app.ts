import express, { urlencoded, Request, Response } from 'express';
import { resolve } from 'path';
import { config } from 'dotenv';

import apiRoute from './routes/api';

config({ path: resolve(__dirname, "../.env") });

const app = express();
const port = process.env.API_PORT;

app.use(urlencoded({ extended: true }));

app.use('/api', apiRoute );

app.get('/', (req: Request, res: Response) => res.send('API is running...'));
app.listen(port, () => console.log(`App is listening on port ${port}`));