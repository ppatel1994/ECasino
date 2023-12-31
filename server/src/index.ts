import express, { Application, Request, Response } from 'express';

// Boot express
const app: Application = express();
const port = 5001;

// Application routing
app.use('/', (req: Request, res: Response) => {
    res.status(200).send({ data: 'Hello world' });
});

app.use('/', (req, res) => {
    res.status(200);
})

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`)
});
