
export const useProjectsHook = () => {
    const projects = [
        {
        id: 1,
        title: "New Stetic SST",
        subtitle: "Sistema de Gestión SST",
        description: "Sistema de gestión de Seguridad y Salud en el Trabajo con arquitectura de microservicios. Optimiza procesos clave, seguimiento de personal y vigilancia epidemiológica.",
        longDescription: "Lideré el desarrollo de un sistema completo de SST estructurado bajo microservicios, implementando módulos para gestión de EPP, inspecciones y control de accidentalidad.",
        technologies: ["Node.js", "NestJS", "PostgreSQL", "Docker", "React", "TypeScript"],
        features: ["Microservicios", "Gestión EPP", "Vigilancia Epidemiológica", "Dashboard Analytics"],
        role: "Full Stack Developer",
        duration: "6 meses",
        teamSize: "4 personas",
        impact: "Reducción del 40% en tiempos de gestión",
        color: "from-blue-500 to-cyan-500",
        url : 'http://localhost:5000/',
        private: true
        } 
    ];

    return {
        projects
    }
}
