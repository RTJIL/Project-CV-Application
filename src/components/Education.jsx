import '/src/styles/Education.css';

export default function Education({isOpen, toggleSection}) {
  return (
    <div className="education-section">
      <div
        onClick={toggleSection}
        role="button"
        tabIndex={0}
        className="education-button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src="/src/assets/mortarboard.png" alt="mortarboard" />
        <div className="title">Education</div>
        <img
          className={isOpen ? 'open' : ''}
          src="/src/assets/arrow-down-sign-to-navigate.png"
          alt="arrow-down-sign-to-navigate"
          style={{ marginLeft: 'auto', height: '18px', marginRight: '10px' }}
        />
      </div>

      <div
        className={`education-sub-section ${isOpen ? 'open' : ''}`}
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img src="/src/assets/plus.png" alt="plusIco" /> Education
        </button>
      </div>
    </div>
  );
}
