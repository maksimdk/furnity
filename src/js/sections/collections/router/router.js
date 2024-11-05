import { sofa, badroom, pageNotFound } from './pages/index.js';

const router = {
  '/badroom': badroom,
  '/sofa': sofa,
  '/404': pageNotFound,
};

export default router;
