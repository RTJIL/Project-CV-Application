import { useState } from 'react';

import Experience from './Experience';
import Skills from './Skills';

export default function SyncEducationExp() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <>
      <Skills
        isOpen={openSection === 'skills'}
        toggleSection={() => toggleSection('skills')}
      />
      <Experience
        isOpen={openSection === 'experience'}
        toggleSection={() => toggleSection('experience')}
      />
    </>
  );
}
