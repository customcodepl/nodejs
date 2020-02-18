import express from 'express';

const app = express()
const port = 3000
// bodyparser
app.get('/', (req, res) => res.send('Hello World jjj!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))