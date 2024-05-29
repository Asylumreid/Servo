import React, { useState } from 'react';

const HelpCentreFAQ = () => {
  // State variables to control the visibility of each dropdown
  const [showBusinessPartners, setShowBusinessPartners] = useState(false);
  const [showFreelancerPartner, setShowFreelancerPartner] = useState(false);
  const [showAppUser, setShowAppUser] = useState(false);

  return (
    <div>
      <div onClick={() => setShowBusinessPartners(!showBusinessPartners)}>
        Business Partners
      </div>
      {showBusinessPartners && (
        <div>
          Content for Business Partners
        </div>
      )}

      <div onClick={() => setShowFreelancerPartner(!showFreelancerPartner)}>
        Freelancer Partner
      </div>
      {showFreelancerPartner && (
        <div>
          Content for Freelancer Partner
        </div>
      )}

      <div onClick={() => setShowAppUser(!showAppUser)}>
        App User
      </div>
      {showAppUser && (
        <div>
          Content for App User
        </div>
      )}
    </div>
  );
};

export default HelpCentreFAQ;
