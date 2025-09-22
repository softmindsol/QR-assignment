import React from "react";
import Image from "next/image";

const TextArrowFrame = ({ scale = 1, color, text, qrCodeApiUrl }) => {
  const borderWidth = `${0.25 * scale}rem`;
  const qrSize = Math.min(150 * scale, 140);
  const fontSize = `${0.875 * scale}rem`;
  const minWidth = `${2.25 * scale}rem`;
 

  return (
    <div className="flex flex-col items-center z-0">
      {" "}

      <div
        className="relative mb-2 rounded-lg overflow-hidden"
        style={{
          border: `${borderWidth} solid ${color}`,
          width: qrSize + parseFloat(borderWidth) * 2,
          height: qrSize + parseFloat(borderWidth) * 2,
        }}
      >
        <Image
          src={qrCodeApiUrl}
          alt="QR Code Preview"
          width={qrSize}
          height={qrSize}
          unoptimized
          priority={scale > 1}
    className="object-contain w-full h-full z-0" // fill container, no absolute
        />
      </div>
      <div
        className="flex items-center justify-center mb-2 italic font-mono"
        style={{ color, fontSize, minWidth }}
      >
        {text}
      </div>
    </div>
  );
};

const config = {
  id: 2,
  type: 2,
  color: "#000000",
  text: "SCAN ME",
};

TextArrowFrame.config = config;

export default TextArrowFrame;
