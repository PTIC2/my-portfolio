import { useLanguage } from '@/core/context/LanguageContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone } from 'lucide-react';
import { useHeroHook } from '../hooks/useHeroHook';

export const Hero = () => {
  const { texts, language, languages } = useLanguage();
  const isSpanish = language === languages[1].code;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { skills, floatingTags, socialMediaLinks } = useHeroHook({ isSpanish });

  useEffect(() => {
    const handleMouseMove = (e : any) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    
    // Check if mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,112,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,112,236,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mr-3">
                  Andrés  
                </span>
                Cardona

              </motion.h1>

              {/* Title */}
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }} className="text-xl sm:text-2xl text-gray-200 mb-6"
              >
                { isSpanish ? 'Desarrollador De Software' : 'Full Stack Developer' }
                <span className="block text-lg text-gray-300 mt-2">
                { isSpanish ? 'Especialista Backend • Experto en el ecosistema JavaScript' 
                  : 'Backend Specialist • JavaScript Ecosystem Expert' 
                }
                </span>
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0"
              >
                { texts.description }
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm"
              >
                <a href="mailto:11cardona31@gmail.com" className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>11cardona31@gmail.com</span>
                </a>
                <a href="tel:+573012524648" className="flex items-center space-x-2 text-gray-200 hover:text-blue-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+57 301 252 4648</span>
                </a>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }} className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center space-x-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300 bg-white/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Descargar CV</span>
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center lg:justify-start space-x-4"
              >
                {socialMediaLinks.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.url}
                    aria-label={item.name}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-full bg-white/10 text-gray-300 hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                  >
                    <item.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - 3D Card with Floating Tags */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                animate={{
                  rotateY: isHovered ? 10 : 0,
                  rotateX: isHovered ? -10 : 0,
                }}
                transition={{ duration: 0.5 }}
                className="relative mx-auto max-w-md"
                style={{ perspective: 1000 }}
              >
                {/* Floating Tags around the card */}
                {floatingTags.map((tag, index) => (
                  <motion.div
                    key={tag.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    style={{
                      position: 'absolute',
                      ...(isMobile ? tag.mobilePosition : tag.position),
                      transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                      zIndex: 10,
                    }}
                    className="hidden sm:block"
                  >
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [-2, 2, -2],
                      }}
                      transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{ scale: 1.1, rotate: 0 }}
                      className={`group relative flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm cursor-pointer shadow-lg`}
                    >
                      <tag.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      <span className="text-xs sm:text-sm font-medium text-white whitespace-nowrap">{tag.text}</span>
                      <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </motion.div>
                ))}

                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl" />
                
                {/* Card */}
                <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-black/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                  
                  {/* Code Preview */}
                  <div className="relative">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    
                    <div className="font-mono text-xs sm:text-sm space-y-2">
                      <div className="text-gray-500">// Skills & Technologies</div>
                      <div>
                        <span className="text-blue-400">const</span>
                        <span className="text-white ml-2">developer</span>
                        <span className="text-gray-400 ml-2">=</span>
                        <span className="text-gray-400 ml-2">{'{'}</span>
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">name:</span>
                        <span className="text-orange-400 ml-2">'Andrés Cardona'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">role:</span>
                        <span className="text-orange-400 ml-2">'Full Stack Developer'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">experience:</span>
                        <span className="text-purple-400 ml-2">'1.6+ years'</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">expertise:</span>
                        <span className="text-gray-400 ml-2">[</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        {['JavaScript', 'TypeScript', 'Node.js', 'Express.js'].map((skill, i) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                          >
                            <span className="text-orange-400">'{skill}'</span>,
                          </motion.div>
                        ))}
                      </div>
                      <div className="ml-4 text-gray-400">],</div>
                      <div className="text-gray-400">{'}'}</div>
                    </div>
                  </div>

                  {/* Animated Skills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <motion.span key={skill} initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.5 + index * 0.05 }}
                        whileHover={{ scale: 1.1 }} className="px-2 sm:px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Mobile Floating Tags - Shown below card on mobile */}
                <div className="sm:hidden mt-6 flex flex-wrap justify-center gap-2">
                  {floatingTags.slice(0, 4).map((tag, index) => (
                    <motion.div
                      key={tag.id}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${tag.color} backdrop-blur-sm`}
                    >
                      <tag.icon className="w-3 h-3 text-white" />
                      <span className="text-xs font-medium text-white">{tag.text}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};