import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Actions from './components/Actions';
import BaseInfo from './components/BaseInfo';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='buildingSection'>
      <Actions />
      <BaseInfo />
    </div>
  </StrictMode>
);
