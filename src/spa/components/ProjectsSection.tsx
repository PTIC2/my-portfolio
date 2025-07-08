import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ProjectCard } from '../projects/ProjectCard';
import { useProjectsHook } from '../hooks/useProjectsHook';

export const ProjectsSection = () => {
  const { projects } = useProjectsHook();
  const [activeProject, setActiveProject] = useState(0);
  const [___, setHoveredTech] = useState<null | string>(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const nextProject = () => setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () => setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  
  useEffect(() => {
    const handleKeyPress = (e : any) => {
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentProject = projects[activeProject];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden py-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: parallaxY }}
          className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Proyectos Destacados</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Mi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Trabajo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explora mis proyectos más recientes y descubre cómo transformo ideas en soluciones tecnológicas innovadoras
          </p>
        </motion.div>

        {/* Main Project Display */}
        <ProjectCard 
            setHoveredTech={setHoveredTech} 
            currentProject={currentProject}
            activeProject={activeProject}
            nextProject={nextProject}
            prevProject={prevProject}
            projects={projects}
            setActiveProject={setActiveProject}
        />

      </div>
    </section>
  );
};