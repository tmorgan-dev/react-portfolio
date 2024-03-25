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
          <p className="mb-0">101 South 1300 East</p>
          <p className="mb-0">Bountiful, UT 84010</p>
          <p className="mb-0">(801) 759-0354</p>
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-2">Professional Experience</h2>
        <div id='avid-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">AvidXchange</h3>
          <p className="italic">August 2007 - Present</p>
        </div>
        <div id="avid-ic-container">
          <p className="font-bold flex items-start">Integrations Consultant II: Current</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Assist customers with deployment and configuration of integrations</li>
            <li className="text-center mb-2">Create and update integration mappings via the Altova Map Force application.</li>
            <li className="text-center mb-2">Monitor and maintain an escalation queue from the support team.</li>
            <li className="text-center mb-2">Meet with prospective clients to demo software for the sales team.</li>
            <li className="text-center mb-2">Create and maintain documentation on custom interfaces.</li>
            <li className="text-center mb-2">Attend daily scrum meetings with engineering to adhere to an Agile work practice.</li>
            <li className="text-center mb-2">Document all projects and track amount of time spent on a daily basis.</li>
            <li className="text-center mb-2">Follow up on all client emails within 24 hours.</li>
          </ul>
        </div>
        <div id="avid-pc-container">
          <p className="font-bold flex items-start">Project Coordinator: 4 Years</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Assist customers with installation, setup and use of Create-A-Check for use with AvidPay.</li>
            <li className="text-center mb-2">Deploy and educate customers about the PrintToAvid solution.</li>
            <li className="text-center mb-2">Worked on a special project to design the PrintToAvid Integration.</li>
            <li className="text-center mb-2">Designed new integrations for unsupported accounting systems.</li>
            <li className="text-center mb-2">Wrote and sent documentation for internal training.</li>
            <li className="text-center mb-2">Maintain/Administer the Create-A-Check system that the Payment services team uses.</li>
          </ul>
        </div>
        <div id="avid-support-container">
          <p className="font-bold flex items-start">Team Lead/Level 3 Technical Support Agent: 11 Years</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Assist customers with installation, setup and maintenance of Create-A-Check.</li>
            <li className="text-center mb-2">Refer any qualified leads to sales.</li>
            <li className="text-center mb-2">Write and send documentation to customers regarding software use.</li>
            <li className="text-center mb-2">De-escalation calls.</li>
            <li className="text-center mb-2">Research issues for custom software and provide basic fixes and updates.</li>
            <li className="text-center mb-2">Attend weekly support meetings and discuss problematic bugs.</li>
            <li className="text-center mb-2">Organization and implementation of shipping process and procedures.</li>
            <li className="text-center mb-2">Spent a month on sales and met my quota, but support is my true calling.</li>
            <li className="text-center mb-2">Assist all other departments as needed.</li>
          </ul>
        </div>
        <div id='ikano-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">Ikano Communications</h3>
          <p className="italic">January 2005- August 2007</p>
        </div>
        <div id="ikano-container">
          <p className="font-bold flex items-start">Technical Support Agent: 2 Years</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Technical support for all Windows and Macintosh Operating Systems.</li>
            <li className="text-center mb-2">Dial-up Internet.</li>
            <li className="text-center mb-2">DSL Internet.</li>
            <li className="text-center mb-2">Wireless Internet.</li>
            <li className="text-center mb-2">Networking.</li>
            <li className="text-center mb-2">E-mail, Chat.</li>
            <li className="text-center mb-2">Administrative Escalation.</li>
            <li className="text-center mb-2">Graveyard.</li>
            <li className="text-center mb-2">Assisted other technicians with problems and special projects on the Call Floor.</li>
          </ul>
        </div>
        <div id='teleperformance-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">Teleperformance USA</h3>
          <p className="italic">August 2004 - January 2005</p>
        </div>
        <div id="teleperformance-container">
          <p className="font-bold flex items-start">Technical Support Agent</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Technical Support for Microsoft MSN customers.</li>
            <li className="text-center mb-2">Customer Service on the Sprint Project.</li>
          </ul>
        </div>
        <div id='deervalley-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">Deer Valley Ski Resort</h3>
          <p className="italic">Seasonal; Winters of 2003 and 2002</p>
        </div>
        <div id="deervalley-container">
          <p className="font-bold flex items-start">Lift Operator</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Ensuring lift safety.</li>
            <li className="text-center mb-2">Providing an efficient lift flow.</li>
            <li className="text-center mb-2">Ticket handling.</li>
            <li className="text-center mb-2">Equipment testing.</li>
            <li className="text-center mb-2">Accommodating the guests' every need for the ultimate ski experience.</li>
          </ul>
        </div>
        <div id='aquatic-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">Park City Aquatic Center</h3>
          <p className="italic">June 2002 - September 2002</p>
        </div>
        <div id="aquatic-container">
          <p className="font-bold flex items-start">Front Desk Coordinator</p>
          <ul className="list-disc pl-0 flex flex-col items-start">
            <li className="text-center mb-2">Cashier services for patrons of the pool.</li>
            <li className="text-center mb-2">Scheduling swim classes.</li>
            <li className="text-center mb-2">Monitoring members' admittance to pool facilities.</li>
          </ul>
        </div>
        <h2 className="text-3xl font-bold mt-8 mb-2">Education</h2>
        <div id='uofu-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">University of Utah</h3>
          <p className="italic">June 2023 - December 2023</p>
        </div>
        <ul className="list-disc pl-0 flex flex-col items-start">
          <li className="text-center mb-2">Full Stack Coding Boot Camp.</li>
        </ul>
        <div id='pc-header-container' className="flex justify-between">
          <h3 className="text-xl font-bold">Park City High School</h3>
          <p className="italic">August 1997- June 2002</p>
        </div>
        <ul className="list-disc pl-0 flex flex-col items-start">
          <li className="text-center mb-2">High School Diploma- Class of 2002.</li>
          <li className="text-center mb-2">3.1 GPA.</li>
        </ul>
        <h2 className="text-3xl font-bold mt-8 mb-2">Proficiencies</h2>
        <ul className="list-disc pl-0 flex flex-col items-start">
          <li className="text-center mb-2">HTML</li>
          <li className="text-center mb-2">CSS</li>
          <li className="text-center mb-2">Javascript</li>
          <li className="text-center mb-2">APIs</li>
          <li className="text-center mb-2">Node.js</li>
          <li className="text-center mb-2">Express</li>
          <li className="text-center mb-2">MySQL</li>
          <li className="text-center mb-2">ORM</li>
          <li className="text-center mb-2">MVC</li>
          <li className="text-center mb-2">NoSQL</li>
          <li className="text-center mb-2">PWA</li>
          <li className="text-center mb-2">React</li>
          <li className="text-center mb-2">MongoDB</li>
          <li className="text-center mb-2">Github</li>
          <li className="text-center mb-2">Agile</li>
          <li className="text-center mb-2">Altova Mapforce</li>
          <li className="text-center mb-2">Internet and networking</li>
          <li className="text-center mb-2">A+/CNA Microsoft Hardware Certification</li>
          <li className="text-center mb-2">Microsoft OS</li>
          <li className="text-center mb-2">Macintosh OS</li>
          <li className="text-center mb-2">DOS</li>
          <li className="text-center mb-2">Adobe Photoshop</li>
          <li className="text-center mb-2">Flash</li>
          <li className="text-center mb-2">Peripheral devices</li>
          <li className="text-center mb-2">Drivers, upgrades, installations</li>
          <li className="text-center mb-2">Audio/visual electronics</li>
        </ul>
        <h2 className="text-3xl font-bold mt-8 mb-2">Hobbies and Clubs</h2>
        <ul className="list-disc pl-0 flex flex-col items-start">
          <li className="text-center mb-2">BSA Eagle Scout</li>
          <li className="text-center mb-2">Key Club Member</li>
          <li className="text-center mb-2">National Junior Olympic Archers League 1997</li>
          <li className="text-center mb-2">Camping and Hiking</li>
          <li className="text-center mb-2">Concerts</li>
          <li className="text-center mb-2">Movies, Video Games and Comics</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;