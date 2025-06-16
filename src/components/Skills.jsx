import { useState } from 'react';
import '/src/styles/Skills.css';

export default function Skills({ isOpen, toggleSection }) {
  const [isSkillPage, setSkillPage] = useState(false);

  function toggleSkillPage() {
    setSkillPage((prev) => !prev);
  }

  return (
    <div className="skills-section">
      <div
        onClick={toggleSection}
        role="button"
        tabIndex={0}
        className="skills-button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src="./assets/mortarboard.png" alt="mortarboard" />
        <div className="title">Skills</div>
        <img
          className={isOpen ? 'open' : ''}
          src="./assets/arrow-down-sign-to-navigate.png"
          alt="arrow-down-sign-to-navigate"
          style={{ marginLeft: 'auto', height: '18px', marginRight: '10px' }}
        />
      </div>

      <div
        className={`skills-sub-section ${isOpen ? 'open' : ''}`}
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          onClick={toggleSkillPage}
        >
          <img src="./assets/plus.png" alt="plusIco" /> Skills
        </button>

        <label htmlFor="text" className={`skill-holder ${isSkillPage ? 'open' : ''}`}>
          <span className='skill-title'>Skill</span>
          <input type="text" id="text" />
        </label>
      </div>
    </div>
  );
}
