import '/src/styles/Skills.css';

export default function Skills({isOpen, toggleSection}) {
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
        <img src="/src/assets/skills.png" alt="mortarboard" />
        <div className="title">Skills</div>
        <img
          className={isOpen ? 'open' : ''}
          src="/src/assets/arrow-down-sign-to-navigate.png"
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
        >
          <img src="/src/assets/plus.png" alt="plusIco" /> Skills
        </button>
      </div>
    </div>
  );
}
