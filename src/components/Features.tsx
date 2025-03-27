
import { useRef, useEffect } from 'react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const features = featuresRef.current?.querySelectorAll('.feature-item');
    if (features) {
      features.forEach(feature => observer.observe(feature));
    }

    return () => {
      if (features) {
        features.forEach(feature => observer.unobserve(feature));
      }
    };
  }, []);

  return (
    <section className="py-20 relative background-grid overflow-hidden" ref={featuresRef}>
      {/* Decorative Gradient */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent z-10"></div>
      
      <div className="container relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            How Our <span className="bg-gradient-to-r from-[rgb(230,65,65)] to-[rgb(235,233,108)] bg-clip-text text-transparent">AI Model</span> Works
          </h2>
          <p className="text-lg text-charcoal/70">
            Our sophisticated deep learning system analyzes content using these advanced techniques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureItem 
            number="01"
            title="Text Fingerprinting"
            description="Our system creates a unique fingerprint of natural language patterns to detect AI-generated content with over 96% accuracy."
            delay="0"
          />
          
          <FeatureItem 
            number="02"
            title="Deep Neural Networks"
            description="We employ state-of-the-art neural networks trained on millions of samples to identify subtle manipulation markers invisible to humans."
            delay="100"
          />
          
          <FeatureItem 
            number="03"
            title="Facial Inconsistency Detection"
            description="For videos, we analyze frame-by-frame to detect facial anomalies, lighting inconsistencies, and unnatural movements."
            delay="200"
          />
          
          <FeatureItem 
            number="04"
            title="Metadata Verification"
            description="Our system examines hidden metadata and digital signatures to verify content authenticity and identify synthetic manipulations."
            delay="300"
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
  delay: string;
}

const FeatureItem = ({ number, title, description, delay }: FeatureItemProps) => {
  return (
    <div 
      className={`feature-item opacity-0 glass-card p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start">
        <span className="text-4xl font-display font-bold text-[rgb(230,65,65)]/10 mr-4">{number}</span>
        <div>
          <h3 className="text-xl font-display font-semibold mb-3 bg-gradient-to-r from-[rgb(230,65,65)] to-[rgb(235,233,108)] bg-clip-text text-transparent">{title}</h3>
          <p className="text-charcoal/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
