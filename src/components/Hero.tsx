
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const decorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!decorRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;
      
      decorRef.current.style.transform = `translate(${xPos}px, ${yPos}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden background-grid">
      {/* Decorative elements */}
      <div ref={decorRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-deepblue/5 animate-slow-spin"></div>
        <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-mint/5 animate-slow-spin animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-coral/10 animate-pulse-soft"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-sm font-semibold text-deepblue bg-softblue rounded-full animate-fade-in">
            Advanced AI Detection Technology
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in delay-100">
            Detect <span className="text-gradient">DeepFakes</span> with Precision and Confidence
          </h1>
          
          <p className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto mb-8 animate-fade-in delay-200">
            Welcome to our state-of-the-art deepfake detection system. Identifying manipulated text and video content has never been more reliable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300">
            <a 
              href="https://your-streamlit-text-detection.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-gradient px-6 py-3 rounded-full font-medium text-base flex-1 sm:flex-initial text-center"
            >
              Detect Text
            </a>
            <a 
              href="https://your-streamlit-video-detection.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white border border-deepblue/20 text-charcoal font-medium text-base flex-1 sm:flex-initial text-center hover:bg-softblue transition-colors duration-300"
            >
              Detect Video
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
