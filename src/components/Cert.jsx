import React from 'react';
import certPDF from '../assets/images/cert.pdf';

const Cert = () => {
  return (
    <div>
      <embed src={certPDF} type="application/pdf" width="100%" height="600px" />
    </div>
  );
}

export default Cert;
