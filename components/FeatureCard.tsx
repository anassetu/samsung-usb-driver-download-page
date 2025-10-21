
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, text }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-3">
        <div className="text-blue-600 text-2xl mr-3">{icon}</div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
};
