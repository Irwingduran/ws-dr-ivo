import React from 'react';

const MapLocation = () => {
  return (
    <div className="mt-10">
      <h3 className="font-bold text-[28px] text-center text-gray-800">Ubicación</h3>
      <div className="mt-6 w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7543.513671150755!2d-98.23757252229008!3d19.030433800000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfc776ef75190d%3A0xde4d9063394de177!2sHospital%20Puebla!5e0!3m2!1sen!2sus!4v1734462668172!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-[20px] shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default MapLocation;