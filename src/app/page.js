"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import QRCodePreview from "./components/QRCodePreview";
import TemplateSelector from "./components/TemplateSelector";
import NoFrame from "./components/templates/NoFrame";
import TextAboveFrame from "./components/templates/TextAboveFrame";
import TextArrowFrame from "./components/templates/TextArrowFrame";
import { IoReload } from "react-icons/io5";

export default function Home() {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateId, setSelectedTemplateId] = useState(0);

  useEffect(() => {
    const loadedTemplates = [
      { ...NoFrame.config, Component: NoFrame, key: "no frame" },
      { ...TextAboveFrame.config, Component: TextAboveFrame, key: "text above" },
      { ...TextArrowFrame.config, Component: TextArrowFrame, key: "text arrow" },
    ];
    setTemplates(loadedTemplates);
  }, []);

  const selectedTemplate =
    templates.find((t) => t.id === selectedTemplateId) || templates[0];

  const updateTemplate = (id, updates) => {
    setTemplates(
      templates.map((t) => (t.id === id ? { ...t, ...updates } : t))
    );
  };

  if (templates.length === 0) return <div>Loading templates...</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="grid grid-cols-1  gap-6 p-6">
          <h1 className="mb-4 text-3xl font-bold text-center text-black">
            Customize QR Code
          </h1>
        <div className="self-start sticky top-[60px]">

          <QRCodePreview
            setSelectedTemplateId={setSelectedTemplateId}
            templateId={selectedTemplate.type}
            frameColor={selectedTemplate.color}
            frameText={selectedTemplate.text}
          />

        </div>
          <button
            onClick={() => setSelectedTemplateId(0)}
            className="mx-auto mt-4 flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700"
            aria-label="Reset Design"
          >
            <IoReload />
            RESET DESIGN
          </button>

        <div>
          <TemplateSelector
            templates={templates}
            selectedTemplateId={selectedTemplateId}
            setSelectedTemplateId={setSelectedTemplateId}
            updateTemplate={updateTemplate}
          />
        </div>
      </main>
    </div>
  );
}
