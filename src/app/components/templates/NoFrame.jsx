import React from 'react';
import Image from 'next/image';

const TextArrowFrame = ({ scale = 1, color, text, qrCodeApiUrl }) => {
  const borderWidth = `${0.25 * scale}rem`; // Scaled border width
  const qrSize = Math.min(150 * scale, 140); // Consistent QR size with cap


  return (
    <div className="flex flex-col items-center"> {/* Changed to flex-col for vertical stack */}
      <div
        className="relative mb-2 rounded-lg overflow-hidden"
        style={{
          width: qrSize + (parseFloat(borderWidth) * 2), 
          height: qrSize + (parseFloat(borderWidth) * 2), 
        }}
      >
        <Image
          src={qrCodeApiUrl}
          alt="QR Code Preview"
          width={qrSize}
          height={qrSize}
          unoptimized
          priority={scale > 1}
          className="object-contain absolute top-0 left-0 " // Position QR inside border
        />  
      </div>
    
      
    </div>
  );
};

const config = {
  id: 0,
  type: 0,
  color: '#000000',
  text: 'SCAN ME'
};

TextArrowFrame.config = config;

export default TextArrowFrame;