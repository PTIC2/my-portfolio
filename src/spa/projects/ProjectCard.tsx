import type { Project } from "../assets/ts/types";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink,Code2,Lock,Layers,Users,Calendar} from 'lucide-react';

interface Props {
  currentProject : Project;
  activeProject : number;
  setHoveredTech : (value : string | null) => void;
  projects : Project[];
}

export const ProjectCard = ({ currentProject, activeProject, setHoveredTech } : Props) => {
  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left: Project Info */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="order-2 lg:order-1"
        >
          {/* Project Number */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <span className="text-6xl lg:text-8xl font-bold text-gray-800">
              0{activeProject + 1}
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-800 to-transparent" />
          </motion.div>

          {/* Project Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <h3 className={`text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentProject.color} mb-2`}>
              {currentProject.title}
            </h3>
            <p className="text-xl text-gray-400">{currentProject.subtitle}</p>
          </motion.div>

          {/* Project Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-6 leading-relaxed"
          >
            {currentProject.longDescription}
          </motion.p>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8"
          >
            <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <Users className="w-5 h-5 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Equipo</p>
              <p className="text-white font-medium">{currentProject.teamSize}</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <Calendar className="w-5 h-5 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Duración</p>
              <p className="text-white font-medium">{currentProject.duration}</p>
            </div>
            <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm">
              <Code2 className="w-5 h-5 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Rol</p>
              <p className="text-white font-medium">{currentProject.role}</p>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }} className="mb-8"
          >
            <h4 className="text-sm text-gray-400 mb-3">Tecnologías utilizadas</h4>
            <div className="flex flex-wrap gap-2">
              {currentProject.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  onHoverStart={() => setHoveredTech(tech)}
                  onHoverEnd={() => setHoveredTech(null)}
                  className="px-3 py-1 text-sm rounded-full bg-white/10 text-white border border-white/20 hover:border-blue-400/50 transition-all cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            {currentProject.url && (
              <motion.a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Descubre más</span>
              </motion.a>
            )}

            {currentProject.private && (
              <div className="flex items-center space-x-2 px-6 py-2 rounded-full bg-gray-800 text-gray-400">
                <Lock className="w-5 h-5" />
                <span>Proyecto Privado</span>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Right: Visual Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 relative"
        >
          {/* 3D Card Container */}
          <div className="relative h-[400px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject.id}
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0"
                style={{ perspective: 1000 }}
              >
                {/* Project Card */}
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: -5 }}
                  className={`relative h-full rounded-2xl bg-gradient-to-br ${currentProject.color} p-[2px] overflow-hidden`}
                >
                  <div className="relative h-full rounded-2xl bg-black/90 backdrop-blur-xl overflow-hidden">
                    {/* Project Image */}
                    {(currentProject.images_urls.length >= 1) && (
                      <motion.div initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }} className="absolute inset-0 z-0"
                      >
                        <img src={currentProject.images_urls[0]} alt={`${currentProject.title}`}
                          className="w-full h-full" loading="lazy"
                        />
                        {/* Overlay gradient for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
                      </motion.div>
                    )}

                    {/* Content */}
                    <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="text-center"
                      >
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                          {currentProject.title}
                        </h3>
                        <p className="text-gray-200 mb-6 text-sm sm:text-base drop-shadow-md">
                          {currentProject.description}
                        </p>
                        
                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                          {currentProject.features.slice(0, 4).map((feature, index) => (
                            <motion.div key={feature} initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + index * 0.1 }}
                              className="flex items-center space-x-2 text-sm text-gray-400"
                              >
                              <Layers className="w-4 h-4 text-blue-400" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-8 right-8 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full blur-xl"
                    />
                    <motion.div
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 5, repeat: Infinity }}
                      className="absolute bottom-8 left-8 w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full blur-xl"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>
      </div>
    </div>
  )
}