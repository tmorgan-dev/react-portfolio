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
    <div className="flex flex-col items-center justify-center">
      <div id="resume-container" className="text-black text-center mt-12">
        <h1 className="text-6xl font-bold">Tim Morgan</h1>
        <p className="text-lg mt-12">I have been an IT professional for the past 20 years and have recently been full stack certified. I am proficient in the following skills</p>
        <ul className="text-base mt-12">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>API</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL</li>
          <li>ORM</li>
          <li>MVC</li>
          <li>NoSQL</li>
          <li>PWA</li>
          <li>React</li>
          <li>MERN</li>
        </ul>
      </div>

      <button onClick={downloadPDF} className="bg-blue-500 text-white text-lg px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Download PDF
      </button>
    </div>
  );
};

export default Resume;