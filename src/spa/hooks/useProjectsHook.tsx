import type { Project, ProjectSecondary } from "../assets/ts/types";

export const useProjectsHook = () => {
    const projects : Project[] = [
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
            color: "from-teal-500 via-teal-300 to-teal-100",
            url : 'http://localhost:5000/',
            images_urls : [
                'https://sgvsoftware.com/wp-content/uploads/2022/09/fabrica-newstetic.jpg'
            ],
            private: true
        }
    ];

    const secondaryProjects : ProjectSecondary[] = [
      {
        id: 1,
        title: 'Nexo Migratorio LLC',
        description: 'Landing page moderna para startup tecnológica con animaciones y diseño responsive',
        category: 'landing',
        technologies: ['JavaScript', 'React', 'Tailwind', 'Framer Motion'],
        image: '/api/placeholder/400/300',
        color: 'from-blue-500 to-purple-500',
        github: '#',
        demo: '#',
        features: ['Responsive', 'Animaciones', 'SEO Optimizado']
      },
      {
        id: 2,
        title: 'Grupo Coactiva S.A.S',
        description: 'Portfolio minimalista para diseñador gráfico con galería interactiva',
        category: 'landing',
        technologies: ['TypeScript', 'React', 'Tailwind', 'Framer Motion'],
        image: '/api/placeholder/400/300',
        color: 'from-pink-500 to-rose-500',
        github: '#',
        demo: '#',
        features: ['Galería', 'Transiciones', 'Dark Mode']
      },
      {
        id: 3,
        title: 'Restaurant Menu',
        description: 'Aplicación web para visualización de menú digital con sistema de pedidos',
        category: 'web',
        technologies: ['Vue.js', 'Vuetify', 'Firebase'],
        image: '/api/placeholder/400/300',
        color: 'from-green-500 to-emerald-500',
        github: '#',
        demo: '#',
        features: ['Tiempo Real', 'PWA', 'Multi-idioma']
      }
    ];

    return {
        projects,
        secondaryProjects
    }
}
