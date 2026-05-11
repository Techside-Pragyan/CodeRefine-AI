import { Router } from 'express';
import { refactorCode } from '../services/geminiService.js';

const router = Router();

router.post('/', async (req, res) => {
  const { code, language } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  try {
    const result = await refactorCode(code, language || 'javascript');
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to refactor code' });
  }
});

export default router;
