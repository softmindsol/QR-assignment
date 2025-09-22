"use client";
import React, { useState, useEffect } from "react";
import FrameRenderer from "./FrameRenderer";

const Card = ({ children, active = false, className = "", onClick }) => (
  <button
    className={`flex-shrink-0 rounded-lg border-2 p-1 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
      active ? "border-blue-500" : "border-gray-300"
    } bg-white ${className}`}
    onClick={onClick}
    aria-pressed={active}
    role="option"
  >
    {children}
  </button>
);

const TemplateSelector = ({
  templates,
  selectedTemplateId,
  setSelectedTemplateId,
  updateTemplate,
}) => {
  const targetUrl = "https://softmindsol.com";
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    targetUrl
  )}`;

  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 640) {
        setScale(0.4); 
      } else if (width <= 1024) {
        setScale(0.3); 
      } else {
        setScale(0.35); 
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="p-4 h-fit flex flex-col justify-between">
      <div>
        <h2 className="mb-3 flex items-center gap-2 text-sm font-bold text-gray-500">
          FRAME{" "}
          <span className="font-bold text-gray-400" aria-hidden="true">
            ⓘ
          </span>
        </h2>

        <div
          className="flex snap-x snap-mandatory space-x-3 overflow-x-auto py-2 scrollbar-hide"
          role="listbox"
          aria-label="Frame selection"
        >
          {templates?.map((template) => (
            <Card
              key={template.key}
              active={selectedTemplateId === template.id}
              className=" h-28 w-28 lg:h-40 lg:w-40 flex items-center justify-center snap-start "
              onClick={() => setSelectedTemplateId(template.id)}
            >
              <FrameRenderer
                templateId={template.type}
                color={template.color}
                text={template.text}
                scale={scale} 
                qrCodeApiUrl={qrCodeApiUrl}
              />
            </Card>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <label
              className="text-xs font-semibold text-gray-500"
              htmlFor="frame-color"
            >
              Frame Color
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 p-2">
              <input
                type="color"
                id="frame-color"
                value={
                  templates.find((t) => t.id === selectedTemplateId)?.color ||
                  "#000000"
                }
                onChange={(e) =>
                  updateTemplate(selectedTemplateId, { color: e.target.value })
                }
                className="h-6 w-6 rounded cursor-pointer p-0 border-none"
              />
              <input
                type="text"
                value={
                  templates.find((t) => t.id === selectedTemplateId)?.color ||
                  "#000000"
                }
                onChange={(e) =>
                  updateTemplate(selectedTemplateId, { color: e.target.value })
                }
                className="text-sm text-gray-700 focus:outline-none bg-transparent w-full"
              />
            </div>
          </div>
          <div>
            <label
              className="text-xs font-semibold text-gray-500"
              htmlFor="frame-text"
            >
              Frame Text
            </label>
            <div className="mt-1 rounded-lg border border-gray-300 p-2">
              <input
                type="text"
                id="frame-text"
                value={
                  templates.find((t) => t.id === selectedTemplateId)?.text || ""
                }
                onChange={(e) =>
                  updateTemplate(selectedTemplateId, { text: e.target.value })
                }
                className="w-full text-sm font-semibold text-gray-700 focus:outline-none bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 w-full bg-white rounded-full p-4 z-10 max-w-md mx-auto">
        {/* Sticky container for buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            className="w-full  border border-gray-300 py-3 text-center font-semibold text-gray-700 hover:bg-gray-100 text-xs  rounded-full"
            aria-label="Cancel changes"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="w-full  bg-blue-600 py-3 text-center font-semibold text-white hover:bg-blue-700 text-xs rounded-full"
            aria-label="Save changes"
          >
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;
