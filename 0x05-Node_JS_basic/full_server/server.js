import express from 'express';
import router from './routes';

const port = 1245;
const app = express();
console.log('app created');
app.use(router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
