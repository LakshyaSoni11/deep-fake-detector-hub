
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-100">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-deepblue to-mint flex items-center justify-center text-white font-bold mr-2">
              <span className="text-white font-display text-sm">DA</span>
            </div>
            <span className="font-display font-medium text-lg">
              Detect<span className="bg-gradient-to-r from-[rgb(255,75,75)] to-[rgb(255,253,128)] bg-clip-text text-transparent">AI</span>
            </span>
          </div>
          
          <div className="text-sm text-charcoal/60 text-center md:text-right">
            <p className="mb-1">
              &copy; {currentYear} Detect AI. All rights reserved.
            </p>
            <p className="flex items-center justify-center md:justify-end">
              <span className="mr-1">&trade;</span>
              <span>Developed with precision by</span>
              <span className="font-medium bg-gradient-to-r from-[rgb(255,75,75)] to-[rgb(255,253,128)] bg-clip-text text-transparent ml-1">Devils Pentagram</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
