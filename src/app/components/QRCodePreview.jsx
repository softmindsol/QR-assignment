import React, { useState, useEffect } from "react";
import { IoInformationCircleOutline, IoReload } from "react-icons/io5";
import FrameRenderer from "./FrameRenderer";

const QRCodePreview = ({
  templateId,
  frameColor,
  frameText,
  setSelectedTemplateId,
}) => {
  const targetUrl = "https://softmindsol.com";
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    targetUrl
  )}`;

  const [scale, setScale] = useState(1.5);
  const [maxWidthClass, setMaxWidthClass] = useState("max-w-xs");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScale(1.0);
        setMaxWidthClass("max-w-sm");
      } else if (width <= 1024) {
        setScale(1.5);
        setMaxWidthClass("max-w-md");
      } else {
        setScale(2);
        setMaxWidthClass("max-w-xs");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" bg-gray-100 p-4  w-full shadow">
      <h2 className="text-center text-sm font-semibold uppercase text-gray-400">
        Preview
      </h2>
      <div className="z-50 bg-gray-100 py-4">
        <div
          className={` bg-gray-100 mx-auto ${maxWidthClass} flex flex-col items-center`}
        >
          <div className="z-50 bg-gray-100 p-2">
            <FrameRenderer
              templateId={templateId}
              color={frameColor}
              text={frameText}
              scale={scale}
              qrCodeApiUrl={qrCodeApiUrl}
              isPreview
            />
          </div>

          <div className="mt-3 flex items-center justify-center gap-1.5 rounded-md bg-green-100 p-1.5 text-xs font-semibold text-green-800">
            <span>Scannability: Excellent</span>
            <span className="font-bold text-green-600" aria-hidden="true">
              <IoInformationCircleOutline color="black" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCodePreview;
