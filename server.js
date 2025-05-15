import express from 'express';
import proverbsRouter from './routes/proverbs.js';

const app = express();
const PORT = 3000;

app.use(express.json()); 
app.use('/proverbs', proverbsRouter);

app.listen(PORT, () => {
  console.log(` ✅ Server running on http://localhost:${PORT}`);
});
