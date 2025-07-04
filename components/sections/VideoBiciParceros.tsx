
import React from 'react';

interface VideoBiciParcerosProps {
  videoId: string;
}

const VideoBiciParceros: React.FC<VideoBiciParcerosProps> = ({ videoId }) => {
  return (
    <div className="relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video sobre el programa Biciparceros de Bogotá"
      ></iframe>
    </div>
  );
};

export default VideoBiciParceros;