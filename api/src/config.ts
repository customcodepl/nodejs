import { resolve } from 'path';
import { config } from 'dotenv';

config({ path: resolve(__dirname, "../.env") });

export default {
    API_PORT: process.env.API_PORT,
    MONGODB_URIS: process.env.MONGODB_URIS
};