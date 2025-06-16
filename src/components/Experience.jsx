/**Experience.jsx */
import '/src/styles/Experience.css';

export default function Experience({ isOpen, toggleSection }) {
  return (
    <div className="experience-section">
      <div
        onClick={toggleSection}
        role="button"
        tabIndex={0}
        className="experience-button"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <img src="/src/assets/briefcase.png" alt="mortarboard" />
        <div className="title">Experience</div>
        <img
          className={isOpen ? 'open' : ''}
          src="/src/assets/arrow-down-sign-to-navigate.png"
          alt="arrow-down-sign-to-navigate"
          style={{ marginLeft: 'auto', height: '18px', marginRight: '10px' }}
        />
      </div>

      <div
        className={`experience-sub-section ${isOpen ? 'open' : ''}`}
        style={{ flexDirection: 'column', alignItems: 'center' }}
      >
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <img src="/src/assets/plus.png" alt="plusIco" /> Experience
        </button>
      </div>
    </div>
  );
}
