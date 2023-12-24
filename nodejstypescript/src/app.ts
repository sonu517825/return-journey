import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import RequestLogMiddleware from './middleware/RequestLog'

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(RequestLogMiddleware())

import productRouter from './router/ProductRouter'
app.use('/api', productRouter)

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('OK - Running fine...')
})

app.use(express.static(path.join(__dirname, 'public/docsUI')));

app.get("/api-doc", (req: Request, res: Response) => {
    let url = path.join(__dirname, '/public/docsUI/index.html');
    res.sendFile(url, {
        headers: {
            'Content-Type': 'text/html',
        },
    })
})

app.use((req: Request, res: Response) => {
    res.status(404).send({ message: "Can not fount this route on server." })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

export default app