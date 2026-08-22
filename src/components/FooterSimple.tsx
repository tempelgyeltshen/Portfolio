import React from 'react';

export const FooterSimple: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} Pema Tshering. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">
            Thimphu, Kingdom of Bhutan
          </p>
        </div>
      </div>
    </footer>
  );
};