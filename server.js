import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import jokesRouter from './routes/proverbs.js';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/jokes', jokesRouter);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
