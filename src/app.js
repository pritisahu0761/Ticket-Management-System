import express from 'express';
import bodyParser from 'body-parser';
import router from './controllers/ticketController.js';

const app = express();

app.use(bodyParser.json());

app.use('/api/tickets', router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

export default app;