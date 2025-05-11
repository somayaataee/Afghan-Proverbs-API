import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router();
const jokesDataPath = path.join(__dirname, '../jokesData.json');

if (!fs.existsSync(jokesDataPath)) {
  const initialData = [];
  fs.writeFileSync(jokesDataPath, JSON.stringify(initialData, null, 2), 'utf-8');
}

function loadJokes() {
  try {
    const data = fs.readFileSync(jokesDataPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading jokes file:', err);
    return [];
  }
}

//save
function updateJokeFile(data) {
  fs.writeFileSync(jokesDataPath, JSON.stringify(data, null, 2), 'utf-8');
}

//submit jokes
router.post('/submit', (req, res) => {
  const jokesData = loadJokes();
  const { category, textDari, textPashto, translationEn, meaning } = req.body;
  const maxId = jokesData.reduce((max, joke) => (joke.id > max ? joke.id : max), 0);

  const newJoke = {
    id: maxId + 1,
    category,
    textDari,
    textPashto,
    translationEn,
    meaning,
  };

  jokesData.push(newJoke);
  updateJokeFile(jokesData);

  res.render('success', {
    successMessage: 'جوک موفقانه ثبت شد!',
    category: category,
  });
});

//remove jokes
router.delete('/:id', (req, res) => {
  const jokesData = loadJokes();
  const jokeId = parseInt(req.params.id);
  const index = jokesData.findIndex(joke => joke.id === jokeId);

  if (index === -1) {
    return res.status(404).send('جوک یافت نشد!');
  }
  jokesData.splice(index, 1);
  updateJokeFile(jokesData);
  res.redirect('/jokes?deleted=true');
});



//update jokes
router.patch('/:id', (req, res) => {
  const jokesData = loadJokes(); 
  const jokeId = parseInt(req.params.id);
  const updatedFields = req.body;

  const index = jokesData.findIndex(joke => joke.id === jokeId);
  if (index === -1) {
    return res.status(404).json({ message: 'جوک یافت نشد!' });
  }

  jokesData[index] = { ...jokesData[index], ...updatedFields };
  updateJokeFile(jokesData);
  res.redirect('/jokes?updated=true');
});

//find jokes
router.get('/:id', (req, res) => {
  console.log('Request received for joke id:', req.params.id);

  const jokesData = loadJokes();
  const jokeId = parseInt(req.params.id);
  const joke = jokesData.find(joke => joke.id === jokeId);

  if (joke) {
    return res.json(joke);
  }
  return res.status(404).json({ message: 'جوک یافت نشد!' });
});

//edit jokes
router.get('/:id/edit', (req, res) => {
  const jokesData = loadJokes();
  const jokeId = parseInt(req.params.id);
  const joke = jokesData.find(joke => joke.id === jokeId);

  if (!joke) {
    return res.status(404).send('جوک پیدا نشد!');
  }
  res.render('edit', { joke });
});

//route handling --important
router.get('/', (req, res) => {
  res.render('index.html');
});

//joke list
router.get('/jokes', (req, res) => {
  const jokesData = loadJokes();
  res.render('jokes_list', { jokes: jokesData });
});

export default router;



