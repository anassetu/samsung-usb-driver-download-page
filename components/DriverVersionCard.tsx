
import React from 'react';

interface DriverVersionCardProps {
  version: string;
  isNew?: boolean;
}

export const DriverVersionCard: React.FC<DriverVersionCardProps> = ({ version, isNew }) => {
  return (
    <a href="#" className="block group">
        <div className="bg-blue-800 text-white p-4 rounded-lg text-center aspect-square flex flex-col justify-center items-center hover:bg-blue-700 transition-colors relative">
        {isNew && <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg rounded-tr-md">NEW</span>}
        <img src="https://i.imgur.com/8QeB3b6.png" alt="Samsung Drivers Logo" className="w-16 h-auto mb-2 invert brightness-0" />
        <span className="font-semibold text-sm">Samsung USB Driver</span>
        <span className="text-xs">{version}</span>
        </div>
    </a>
  );
};
