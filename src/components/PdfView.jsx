/**PdfView.jsx */
import { useState, useEffect } from 'react';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import PersonalInfo from './PersonalInfo';
import Actions from './Actions';
import SyncEducationExp from './SyncEducationExp';

export default function PdfView() {
  const initialFormData = {
    name: '',
    professionTitle: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: ['', '', ''],
    experience: [
      {
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        city: '',
        overview: '',
      },
    ],
  };

  const [formData, setFormData] = useState({
    name: '',
    professionTitle: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    skills: ['', '', ''],
    experience: [
      {
        jobTitle: '',
        companyName: '',
        startDate: '',
        endDate: '',
        city: '',
        overview: '',
      },
    ],
  });

  const [pdfUrl, setPdfUrl] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function resetForm() {
    setFormData(initialFormData);
  }

  function downloadPdf() {
    if (!pdfUrl) return; // no PDF yet
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'my_resume.pdf'; // whatever filename you want
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  async function generatePdf(data) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    let y = 750;
    const marginLeft = 50;

    function drawText(
      text,
      size = 14,
      x = marginLeft,
      customY = null,
      color = rgb(0, 0, 0)
    ) {
      const drawY = customY !== null ? customY : y;
      page.drawText(text, { x, y: drawY, size, font, color });
      if (customY === null) {
        y -= size + 8;
      }
    }

    const fontSize = 18;
    const lineY = y;
    drawText(`Name: ${data.name}`, fontSize, marginLeft, lineY);
    drawText(`Profession: ${data.professionTitle}`, fontSize, 300, lineY);
    y = lineY - fontSize - 8;

    drawText(`Email: ${data.email}`, 14);
    drawText(`Phone: ${data.phone}`, 14);
    drawText(`Address: ${data.address}`, 14);

    y -= 20;
    drawText('Summary:', 16);
    drawText(data.summary || '', 12);

    y -= 20;
    drawText('Skills:', 16);
    data.skills.forEach((skill) => drawText(`• ${skill}`, 12));

    y -= 20;
    drawText('Experience:', 16);
    data.experience.forEach((exp) => {
      drawText(`${exp.jobTitle} @ ${exp.companyName}`, 14);
      drawText(`${exp.startDate} - ${exp.endDate} | ${exp.city}`, 12);
      drawText(exp.overview, 12);
      y -= 10;
    });

    return await pdfDoc.save();
  }

  useEffect(() => {
    (async () => {
      const pdfBytes = await generatePdf(formData);
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    })();

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
  }, [formData]);

  return (
    <div style={{ display: 'flex', gap: '20px' }} className="buildingSection">
      {/* <div>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="professionTitle"
          placeholder="Profession Title"
          value={formData.professionTitle}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <textarea
          name="summary"
          placeholder="Summary"
          value={formData.summary}
          onChange={handleChange}
        />
      </div> */}
      <div className="input">
        <Actions onClick={resetForm} onInstall={downloadPdf}/>
        <PersonalInfo formData={formData} onChange={handleChange} />
      </div>
      <div className="pdfView">
        <iframe
          src={pdfUrl}
          title="PDF Preview"
          width="100%"
          height="880px"
          style={{ border: '1px solid #b7ff00', borderRadius: '10px' }}
        />
      </div>
    </div>
  );
}
