import React from 'react';
import tv from './images/tv.png';
import video from './videos/deadpool.mp4';

const Television = () => {
  return (
    <div className="w-full px-2 lg:w-2/5 h-auto "   >


      {/* Video Element */}
      <div className=' p-20' style={{ backgroundImage: `url(${tv})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
     
      <video
        className=""
        src={video}
        type="video/mp4"
        autoPlay
        muted
        controls
      />
      </div>
    
    </div>
  );
};

export default Television;
