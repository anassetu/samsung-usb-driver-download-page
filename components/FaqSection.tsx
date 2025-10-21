
import React from 'react';

interface FaqSectionProps {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ id, question, answer }) => {
  return (
    <div id={id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <h3 className="text-xl font-bold mb-3">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  );
};
