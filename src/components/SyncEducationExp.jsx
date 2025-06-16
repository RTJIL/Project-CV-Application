import { useState } from 'react';

import Experience from './Experience';
import Education from './Education';

export default function SyncEducationExp() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <Experience
        isOpen={openSection === 'experience'}
        toggleSection={() => toggleSection('experience')}
      />
      <Education
        isOpen={openSection === 'education'}
        toggleSection={() => toggleSection('education')}
      />
    </>
  );
}
