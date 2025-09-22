import React from "react";
import Image from "next/image";

const TextAboveFrame = ({ scale = 1, color, text, qrCodeApiUrl }) => {
  const borderWidth = `${0.25 * scale}rem`;
  const qrSize = Math.min(150 * scale, 140);
  const buttonFontSize = `${0.4 * scale}rem`;
  const buttonPaddingY = `${0.25 * scale}rem`;
  const buttonPaddingX = `${0.5 * scale}rem`;
  const buttonMaxWidth = `${100 * scale}px`;
  const buttonMinWidth = `${80 * scale}px`;

  return (
    <div className="flex flex-col items-center z-0">
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
    className="object-contain w-full h-full z-0"
        />
      </div>
      <button
        className="flex items-center justify-center gap-1 rounded-full font-bold text-white"
        style={{
          backgroundColor: color,
          padding: `${buttonPaddingY} ${buttonPaddingX}`,
          fontSize: buttonFontSize,
          maxWidth: buttonMaxWidth,
          minWidth: buttonMinWidth,
        }}
        aria-label={text}
      >
        <span
          style={{ fontSize: buttonFontSize }}
          className="rounded-full bg-white px-1 text-black text-xs"
        >
          A
        </span>
        {text}
      </button>
    </div>
  );
};

const config = {
  id: 1,
  type: 1,
  color: "#000000",
  text: "SCAN ME",
};

TextAboveFrame.config = config;

export default TextAboveFrame;
