import express from 'express';
import { resolve } from 'path';
import { config } from 'dotenv';
import bodyParser from 'body-parser';

import { user } from './routes';

config({ path: resolve(__dirname, "../.env") });

const app = express();
const port = process.env.API_PORT;

app.use(bodyParser.json());

app.use('/user', user );

app.get('/', (req: express.Request, res: express.Response) => res.send('API is running...'));
app.listen(port, () => console.log(`App is listening on port ${port}`));