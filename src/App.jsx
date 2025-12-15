import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Zap, Video, Layout, Play, Menu, X } from 'lucide-react';
import clsx from 'clsx';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-3 border-black px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-black italic tracking-tighter">DORK<span className="text-neu-blue">SENSE</span></div>
      
      <div className="hidden md:flex gap-8 font-bold items-center">
        <a href="#" className="hover:underline decoration-4 underline-offset-4 decoration-neu-pink">Features</a>
        <a href="#" className="hover:underline decoration-4 underline-offset-4 decoration-neu-yellow">How it Works</a>
        <a href="#" className="hover:underline decoration-4 underline-offset-4 decoration-neu-lime">Pricing</a>
        <button className="bg-neu-black text-white px-6 py-2 font-bold border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-neu-sm transition-all active:translate-x-1 active:translate-y-1 active:shadow-none">
          Get Started
        </button>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b-3 border-black p-6 flex flex-col gap-4 font-bold md:hidden">
           <a href="#" className="hover:text-neu-pink">Features</a>
           <a href="#" className="hover:text-neu-yellow">How it Works</a>
           <a href="#" className="hover:text-neu-lime">Pricing</a>
           <button className="bg-neu-black text-white px-6 py-3 border-2 border-black shadow-neu hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center overflow-hidden border-b-3 border-black bg-neu-yellow">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
      
      <motion.div 
        style={{ y }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: "backOut" }}
          className="inline-block bg-neu-pink border-3 border-black px-4 py-2 mb-6 shadow-neu transform -rotate-2"
        >
          <span className="font-black text-xl uppercase">AI Video Creation Studio</span>
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
          MAKE VIDEOS <br/>
          <span className="text-white text-stroke-3">WITHOUT THE</span> <br/>
          <span className="bg-neu-blue px-2 text-white inline-block transform rotate-2 border-3 border-black shadow-neu-lg">BORING STUFF</span>
        </h1>

        <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-10 bg-white border-3 border-black p-4 shadow-neu">
          Generate, edit, and publish content automatically. No credit card required. Cancel anytime.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="bg-neu-black text-white text-xl px-8 py-4 font-black border-3 border-transparent hover:bg-white hover:text-black hover:border-black shadow-neu-lg transition-all active:translate-x-2 active:translate-y-2 active:shadow-none flex items-center gap-3">
            Start Creating <ArrowRight size={24} />
          </button>
          <button className="bg-white text-black text-xl px-8 py-4 font-black border-3 border-black shadow-neu-lg transition-all hover:bg-neu-lime active:translate-x-2 active:translate-y-2 active:shadow-none flex items-center gap-3">
            <Play size={24} fill="currentColor" /> Watch Demo
          </button>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-10 md:left-20 bg-white p-4 border-3 border-black shadow-neu hidden lg:block"
      >
        <Video size={48} className="text-neu-purple" />
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 md:right-20 bg-neu-lime p-4 border-3 border-black shadow-neu hidden lg:block"
      >
        <Zap size={48} className="text-black" />
      </motion.div>
    </section>
  );
};

const Marquee = () => {
  return (
    <div className="bg-neu-pink border-b-3 border-black py-4 overflow-hidden whitespace-nowrap flex relative z-20">
      <div className="animate-marquee flex gap-8 items-center">
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-4xl font-black uppercase mx-4">Create Viral Content</span>
            <Star size={32} fill="black" />
            <span className="text-4xl font-black uppercase mx-4 text-white text-stroke-2">Auto-Schedule</span>
            <Star size={32} fill="white" />
          </React.Fragment>
        ))}
      </div>
      <div className="animate-marquee flex gap-8 items-center absolute top-4 left-full">
        {[...Array(10)].map((_, i) => (
          <React.Fragment key={`copy-${i}`}>
            <span className="text-4xl font-black uppercase mx-4">Create Viral Content</span>
            <Star size={32} fill="black" />
            <span className="text-4xl font-black uppercase mx-4 text-white text-stroke-2">Auto-Schedule</span>
            <Star size={32} fill="white" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon: Icon, color, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={clsx(
        "p-8 border-3 border-black shadow-neu-lg hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all cursor-pointer",
        color
      )}
    >
      <div className="bg-white w-16 h-16 border-3 border-black flex items-center justify-center mb-6 shadow-neu-sm">
        <Icon size={32} />
      </div>
      <h3 className="text-3xl font-black mb-4 uppercase">{title}</h3>
      <p className="text-lg font-bold opacity-90">{description}</p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { title: "AI Scripting", description: "Dump raw ideas. We structure them into polished scripts.", icon: Layout, color: "bg-neu-blue" },
    { title: "Auto-Edit", description: "Perfect visual styles and generate preview clips instantly.", icon: Video, color: "bg-neu-lime" },
    { title: "Smart Schedule", description: "We render, optimize, and publish directly to YouTube.", icon: Zap, color: "bg-neu-purple" },
  ];

  return (
    <section className="py-24 px-6 bg-white border-b-3 border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 uppercase">
          Why <span className="underline decoration-neu-yellow decoration-8 underline-offset-8">Dorksense?</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Step = ({ number, title, description, color }) => {
  return (
    <div className="flex gap-6 md:gap-10 items-start">
      <div className={clsx("w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center border-3 border-black text-3xl md:text-4xl font-black shadow-neu", color)}>
        {number}
      </div>
      <div>
        <h3 className="text-3xl md:text-4xl font-black mb-4 uppercase">{title}</h3>
        <p className="text-xl font-bold leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-neu-yellow border-b-3 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black text-center mb-20 bg-white border-3 border-black inline-block p-4 shadow-neu-lg rotate-2 mx-auto">
          SIMPLE WORKFLOW
        </h2>
        
        <div className="space-y-16">
          <Step number="01" title="Draft Ideas" description="Dump your raw ideas, notes, or just a vibe. Our AI structures them into polished scripts and scene breakdowns." color="bg-white" />
          <Step number="02" title="Refine Style" description="Tweak the script, choose visual styles, and generate preview clips. Perfect every detail before production." color="bg-neu-pink" />
          <Step number="03" title="Schedule It" description="Pick your slot and let us handle the rest. We render, optimize, and publish directly to YouTube." color="bg-neu-blue" />
        </div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer className="bg-neu-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-4xl font-black italic">DORKSENSE</div>
        <div className="flex gap-8 font-bold text-xl">
          <a href="#" className="hover:text-neu-yellow">Twitter</a>
          <a href="#" className="hover:text-neu-pink">Instagram</a>
          <a href="#" className="hover:text-neu-lime">YouTube</a>
        </div>
        <div className="text-gray-400 font-bold">
          © 2024 Dorksense AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neu-pink selection:text-white">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
