import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
const proverbsFilePath = path.join(__dirname, '../proverbsData.json');

let proverbsData = [];
try {
  const data = fs.readFileSync(proverbsFilePath, 'utf8');
  proverbsData = JSON.parse(data);

} catch (err) {
  console.error('Error reading proverbs.json:', err);
}

//filter proverbs 
router.get('/', (req, res) => {
    console.log('Current proverbsData:', proverbsData);
  const category = req.query.category;
  if (!category) {
    return res.json(proverbsData);
  }
  const filtered = proverbsData.filter(p => p.category === category);
  if (filtered.length === 0) {
    return res.status(404).json({ message: 'ضرب المثل با این کتگوری یافت نشد!' });
  }
  res.json(filtered);
});

//random proverbs
router.get('/random', (req, res) => {
  if (proverbsData.length === 0) {
    return res.status(404).json({ message: 'هیچ ضرب المثلی یافت نشد!' });
  }
  const idx = Math.floor(Math.random() * proverbsData.length);
  res.json(proverbsData[idx]);
});

// get proverbs by id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: 'لطفا یک عدد را وارد کنید.' });
  }
  const proverb = proverbsData.find(p => p.id === id);
  if (!proverb) return res.status(404).json({ message: 'ضرب المثل یافت نشد!' });
  res.json(proverb);
});

// Add new proverbs
router.post('/', (req, res) => {
  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  if (!textDari || !textPashto || !translationEn || !meaning || !category) {
    return res.status(400).json({ message: 'لطفاً همه فیلدها را وارد کنید.' });
  }
  const maxId = proverbsData.reduce((max, p) => (p.id > max ? p.id : max), 0);
  const newProverb = { id: maxId + 1, textDari, textPashto, translationEn, meaning, category };
  proverbsData.push(newProverb);
  updateProverbsFile(proverbsData);
  res.status(201).json({ message: 'ضرب المثل  موفقانه ثبت گردید', proverb: newProverb });
});

//put proverbs by id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = proverbsData.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'ضرب المثل یافت نشد!' });

  const { textDari, textPashto, translationEn, meaning, category } = req.body;
  if (!textDari || !textPashto || !translationEn || !meaning || !category) {
    return res.status(400).json({ message: 'لطفاً همه فیلدها را وارد کنید.' });
  }

  proverbsData[index] = { id, textDari, textPashto, translationEn, meaning, category };
  updateProverbsFile(proverbsData);
  res.json({ message: 'ضرب المثل موفقانه آپدیت شد!', proverb: proverbsData[index] });
});

// patch proverbs
router.patch('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = proverbsData.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'ضرب المثل یافت نشد!' });

  proverbsData[index] = { ...proverbsData[index], ...req.body };
  updateProverbsFile(proverbsData);
  res.json({ message: 'ضرب المثل موفقانه آپدیت شد!', proverb: proverbsData[index] });
});

//Delete proverbs by id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = proverbsData.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: 'ضرب المثل یافت نشد!' });

  const deleted = proverbsData.splice(index, 1)[0];
  updateProverbsFile(proverbsData);
  res.json({ message: 'ضرب المثل موفقانه حذف شد!', proverb: deleted });
});

//Delete all proverbs
router.delete('/', (req, res) => {
  updateProverbsFile(proverbsData);
  res.json({ message: 'تمام ضرب المثل ها موفقانه حذف شدند!' });
});

function updateProverbsFile(data) {
  try {
    fs.writeFileSync(proverbsFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Error writing to proverbs.json:', err);
  }
}
export default router;
