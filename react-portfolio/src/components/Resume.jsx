import React from 'react';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const downloadPDF = () => {
    const element = document.getElementById('resume-container');

    const pdfOptions = {
      margin: 10,
      filename: 'Tim_Morgan_Resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(element, pdfOptions);
  };

  return (
    <div>
      <div id="resume-container" className="text-white text-lg">
        <h1>Tim Morgan</h1>
        <p>I have been an IT professional for the past 20 years and have recently been full stack certified. I am proficient in the following skills</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </div>

      <button onClick={downloadPDF} className="bg-blue-500 text-white text-lg px-4 py-2 rounded hover:bg-blue-600">
        Download PDF
      </button>
    </div>
  );
};

export default Resume;