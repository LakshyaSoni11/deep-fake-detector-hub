
import { useRef, useEffect } from 'react';

const ActionButtons = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionRef.current?.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative opacity-0"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(230,65,65)]/5 to-[rgb(235,233,108)]/5 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Detect <span className="bg-gradient-to-r from-[rgb(230,65,65)] to-[rgb(235,233,108)] bg-clip-text text-transparent">DeepFakes</span>?
          </h2>
          
          <p className="text-lg text-charcoal/70 mb-10 max-w-2xl mx-auto">
            Choose the detection method you need. Our advanced AI models will analyze your content and provide accurate results within seconds.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <ActionButton 
              title="Detect Text" 
              description="Identify AI-generated or manipulated text content"
              url="https://your-streamlit-text-detection.com"
              type="text"
            />
            
            <ActionButton 
              title="Detect Video" 
              description="Analyze videos for DeepFake manipulation markers"
              url="https://your-streamlit-video-detection.com"
              type="video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ActionButtonProps {
  title: string;
  description: string;
  url: string;
  type: 'text' | 'video';
}

const ActionButton = ({ title, description, url, type }: ActionButtonProps) => {
  return (
    <a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card group p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${type === 'text' ? 'bg-[rgb(230,65,65)]/10 group-hover:bg-[rgb(230,65,65)]/20' : 'bg-[rgb(235,233,108)]/10 group-hover:bg-[rgb(235,233,108)]/20'}`}>
        {type === 'text' ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[rgb(230,65,65)]`}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-[rgb(235,233,108)]`}>
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        )}
      </div>
      
      <h3 className={`text-xl font-display font-semibold mb-2 ${type === 'text' ? 'text-[rgb(230,65,65)]' : 'text-[rgb(235,233,108)]'}`}>{title}</h3>
      
      <p className="text-charcoal/70 mb-4">{description}</p>
      
      <span className={`inline-flex items-center font-medium ${type === 'text' ? 'text-[rgb(230,65,65)]' : 'text-[rgb(235,233,108)]'} group-hover:underline`}>
        Try Now
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 transition-transform group-hover:translate-x-1">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </span>
    </a>
  );
};

export default ActionButtons;
