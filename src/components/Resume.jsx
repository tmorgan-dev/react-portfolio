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
      <button onClick={downloadPDF} className="bg-blue-500 text-white text-lg px-4 py-2 rounded mt-4 hover:bg-blue-600">
        Download as PDF
      </button>
      <div id="resume-container" className="text-black text-center mt-12 max-w-2xl mx-auto">
        <div id="contact-container">
          <h1 className="text-4xl font-bold mb-4">TIMOTHY ADAM MORGAN</h1>
          <p className="mb-4">101 South 1300 East</p>
          <p className="mb-4">Bountiful, UT 84010</p>
          <p className="mb-4">(801) 759-0354</p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-2">Professional Experience</h2>

        {/* AvidXchange */}
        <div className="mb-8">
          <div id='avid-header-container'>
            <h3 className="text-xl font-bold text-left">AvidXchange</h3>
            <p className="italic text-right">August 2007 - Present</p>
          </div>
          <p className="font-bold">Integrations Consultant II</p>
          <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
            <li className="mb-2">Assist customers with deployment and configuration of integrations</li>
            <li className="mb-2">Create and update integration mappings via the Altova Map Force application.</li>
            <li className="mb-2">Monitor and maintain an escalation queue from the support team to assist with back end updates</li>
            <li className="mb-2">Meet with prospective clients to demo software for the sales team</li>
            <li className="mb-2">Create and maintain documentation on custom interfaces</li>
            <li className="mb-2">Attend daily scrum meetings with engineering to adhere to an Agile work practice</li>
            <li className="mb-2">Document all projects and track amount of time spent on a daily basis</li>
            <li className="mb-2">Follow up on all client emails within 24 hours</li>
          </ul>

          <p className="font-bold">Project Coordinator</p>
          <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
            <li className="mb-2">Assist customers with installation, setup, and use of Create-A-Check</li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
            <li className="mb-2"></li>
          </ul>

          <p className="font-bold">Team Lead/Level 3 Tech Support Agent</p>
          <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
            <li className="mb-2">Assist customers with installation, setup, and maintenance of Create-A-Check</li>
            {/* Add other relevant points */}
          </ul>
        </div>

        {/* Ikano Communications */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Ikano Communications, Salt Lake City, UT</h3>
          <p className="italic">January 2005 - August 2007</p>

          <p className="font-bold">Tech Support Agent</p>
          <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
            <li className="mb-2">Technical support for all Windows and Macintosh Operating Systems</li>
            {/* Add other relevant points */}
          </ul>
        </div>

        {/* Teleperformance USA */}
        <div className="mb-8">
          <h3 className="text-xl font-bold">Teleperformance USA, Salt Lake City, UT</h3>
          <p className="italic">August 2004 - January 2005</p>

          <p className="font-bold">Tech Support Agent</p>
          <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
            <li className="mb-2">Technical Support for Microsoft MSN customers</li>
            {/* Add other relevant points */}
          </ul>
        </div>

        {/* Deer Valley Ski Resort */}
        {/* Add other relevant sections following the same structure */}

        <h2 className="text-2xl font-bold mt-8 mb-2">Education</h2>
        <div className="mb-8">
          <p className="font-bold">University Of Utah</p>
          <p className="italic">June 2023 - December 2023</p>
          <p>Full Stack Coding Boot Camp</p>
        </div>

        {/* Add other relevant sections following the same structure */}

        <h2 className="text-2xl font-bold mt-8 mb-2">Proficiency In</h2>
        <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
          <li className="mb-2">HTML</li>
          <li className="mb-2">CSS</li>
          {/* Add other relevant skills */}
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-2">Hobbies and Clubs</h2>
        <ul className="list-disc pl-8 mb-2"> {/* Reduced margin-bottom for list items */}
          <li className="mb-2">Key Club Member</li>
          <li className="mb-2">National Junior Olympic Archers League 1997</li>
          {/* Add other hobbies and clubs */}
        </ul>
      </div>


    </div>

  );
};

export default Resume;