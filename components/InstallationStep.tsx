
import React from 'react';

interface InstallationStepProps {
  number: number;
  text: string;
  image?: string;
}

export const InstallationStep: React.FC<InstallationStepProps> = ({ number, text, image }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{number}</div>
      <div className="flex-1">
        <p className="text-gray-700 leading-relaxed font-semibold">{text}</p>
        {image && <img src={image} alt={`Installation Step ${number}`} className="mt-4 rounded-lg shadow-md border" />}
      </div>
    </div>
  );
};
