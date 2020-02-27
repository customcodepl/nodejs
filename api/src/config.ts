import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, "../.env") });

const port = process.env.API_PORT;

export { port };