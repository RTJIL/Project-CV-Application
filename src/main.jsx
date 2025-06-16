import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Actions from './components/Actions';
import PersonalInfo from './components/PersonalInfo';
import SyncEducationExp from './components/SyncEducationExp';
import PdfView from './components/PdfView';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PdfView />
  </StrictMode>
);
