import React from 'react';
import NoFrame from './templates/NoFrame';
import TextAboveFrame from './templates/TextAboveFrame';
import TextArrowFrame from './templates/TextArrowFrame';

const FrameRenderer = ({ templateId, color, text, scale = 1, qrCodeApiUrl, isPreview = false }) => {
  const TemplateComponent = {
    0: NoFrame,
    1: TextAboveFrame,
    2: TextArrowFrame,
  }[templateId];

  if (!TemplateComponent) return null;

  return (
    <TemplateComponent
      scale={scale}
      color={color}
      text={text}
      qrCodeApiUrl={qrCodeApiUrl}
    />
  );
};

export default FrameRenderer;