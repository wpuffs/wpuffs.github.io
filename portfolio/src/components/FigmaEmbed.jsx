import React from 'react';

const FigmaEmbed = ({src}) => {
  return (
    <div>
      <iframe
          style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
          width="800"
          height="450"
          src={src}
          allowFullScreen
          title="Figma Prototype"
      ></iframe>
    </div>
  );
};

export default FigmaEmbed;

