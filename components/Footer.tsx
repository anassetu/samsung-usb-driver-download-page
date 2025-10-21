
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Site Links</h3>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 hover:underline">Samsung Firmware</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline">Samsung Combination</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Useful</h3>
            <ul className="space-y-1 text-gray-600">
              <li><a href="#" className="hover:text-blue-600 hover:underline">Download Driver</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline">Choose Device</a></li>
              <li><a href="#" className="hover:text-blue-600 hover:underline">How-to Install</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Connect</h3>
            <a href="#" className="text-gray-700 bg-gray-200 h-8 w-8 inline-flex items-center justify-center rounded-full text-lg hover:text-blue-600 hover:bg-gray-300">
              <i className="fa-solid fa-rss"></i>
            </a>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-gray-500">
          <p>Copyright © 2016-2025 Samsung USB Driver. All Rights Reserved.</p>
          <p>Managed by Five Alphabets | WordPress hosting by <a href="#" className="text-blue-600 hover:underline">Hostinger</a>. CDN by <a href="#" className="text-blue-600 hover:underline">BunnyCDN</a>.</p>
          <p className="mt-4 text-xs">
            The Samsung® trademark is the intellectual property of Samsung Electronics Co., Ltd. The use of the Samsung® name on this website is for identification purposes only. It does not imply endorsement by Samsung Electronics Co., Ltd. Samsung USB Driver is not endorsed by, owned by, or affiliated with Samsung Electronics Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};
