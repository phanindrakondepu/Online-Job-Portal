import React, { useEffect, useState } from 'react';

export default function RecruiterHome() {
  const [recruiterData, setRecruiterData] = useState("");

  useEffect(() => {
    const storedRecruiterData = localStorage.getItem('recruiter');
    if (storedRecruiterData) {
      const parsedRecruiterData = JSON.parse(storedRecruiterData);
      setRecruiterData(parsedRecruiterData)
    }
  }, []);

  return (
    
    <div className='body1' >
      {recruiterData && (
        <div>
          <br/>
          <h4>Welcome {recruiterData.fullname}</h4>
        </div>
      )}
    </div>
  );
}