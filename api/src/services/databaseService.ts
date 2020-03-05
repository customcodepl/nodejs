import mongoose from "mongoose";
import config from '../config';

export default mongoose.connect(config.MONGODB_URIS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
