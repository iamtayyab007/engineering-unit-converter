'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              About Our Tool
            </h3>
            <p className="text-gray-300 text-sm">
              Engineering Unit Converter is a precision tool designed for engineers, 
              students, and professionals who need accurate unit conversions across 
              multiple engineering disciplines.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              Engineering Resources
            </h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="hover:text-yellow-300 transition-colors">
                <a href="https://www.engineeringtoolbox.com/" target="_blank" rel="noopener noreferrer">
                  Engineering Toolbox
                </a>
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                <a href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                  Wolfram Alpha
                </a>
              </li>
              <li className="hover:text-yellow-300 transition-colors">
                <a href="https://www.nist.gov/" target="_blank" rel="noopener noreferrer">
                  NIST Standards
                </a>
              </li>
            </ul>
          </div>
          
          {/* Engineering Fields */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Supported Fields
            </h3>
            <div className="grid grid-cols-2 gap-1 text-gray-300 text-sm">
              <span>Civil</span>
              <span>Mechanical</span>
              <span>Electrical</span>
              <span>Chemical</span>
              <span>Aerospace</span>
              <span>Environmental</span>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="flex items-center mb-4 md:mb-0">
            <svg className="w-6 h-6 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M11,7 L13,7 L13,13 L11,13 L11,7 Z M12,17.3 C11.28,17.3 10.7,16.72 10.7,16 C10.7,15.28 11.28,14.7 12,14.7 C12.72,14.7 13.3,15.28 13.3,16 C13.3,16.72 12.72,17.3 12,17.3 Z" />
            </svg>
            <p>© {currentYear} Engineering Unit Converter. All rights reserved.</p>
          </div>
          <div>
            <p>Designed for engineers by engineers</p>
          </div>
        </div>
      </div>
    </footer>
  );
}