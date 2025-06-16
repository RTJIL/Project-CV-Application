import '/src/styles/Actions.css';

export default function Actions() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: '#1a1a1a',
        borderRadius: '10px',
        position: 'sticky',
        top: '10px',
      }}
    >
      <button
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '50%',
          color: '#fc0005'
        }}
      >
        <img
          className="delete-ico"
          src="/src/assets/delete.png"
          alt="install"
        />
        Clear Resume
      </button>

      <button
        className="download-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '50%',
        }}
      >
        <img
          className="install-ico"
          src="/src/assets/installation.png"
          alt="install"
        />
        Download
      </button>
    </div>
  );
}
