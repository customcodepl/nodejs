import express from 'express';
import { resolve } from 'path';
import { config } from 'dotenv';

console.log(config({ path: resolve(__dirname, "../.env") }));

const app = express();
const port = process.env.API_PORT;
// bodyparser
app.get('/', (request: express.Request, response: express.Response) => response.send('Hello World!'));
app.listen(port, () => console.log(`App is listening on port ${port}`));