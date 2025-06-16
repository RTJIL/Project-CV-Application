import '/src/styles/Actions.css';
import deleteIco from '/public/delete.png';
import installIco from '/public/installation.png';

export default function Actions({ onClick, onInstall }) {
  /* const savePdf = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'live-edited.pdf';
    a.click();
  }; */

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
          color: '#fc0005',
        }}
        onClick={onClick}
      >
        <img className="delete-ico" src={deleteIco} alt="install" />
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
        onClick={onInstall}
      >
        <img className="install-ico" src={installIco} alt="install" />
        Download
      </button>
    </div>
  );
}
