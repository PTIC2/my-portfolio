import { useLanguage } from "@/core/context/LanguageContext";
import type { Project, ProjectSecondary } from "../assets/ts/types";

export const useProjectsHook = () => {
    const { language } = useLanguage();
    const isSpanish = language === 'ES';

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
        description: `${isSpanish ? 'Asesoría completa y personalizada para tus procesos migratorios en los EE.UU., lo que resultó en un aumento del 45% en las asesorías después del lanzamiento de la página web.' : 'Complete and personalized advisory for your immigration processes in the USA, which led to a 45% increase in consultations after the website launch.'}`,
        category: 'landing',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/nexomigratorio.webp',
        color: 'blue-500',
        github: 'https://github.com/CardonaAndres/NexoMigratorioLLC',
        demo: 'https://www.nexomigratorio.com',
        features: ['Responsive', 'Animaciones', 'SEO Optimizado']
      },
      {
        id: 2,
        title: `${isSpanish ? 'Grupo' : 'Group'} Coactiva S.A.S`,
        description: `${isSpanish ? 'Agencia líder en recuperación de cartera en Colombia y América Latina. La plataforma presenta sus servicios especializados en gestión de cartera vencida, destacando su cobertura regional, experiencia y enfoque tecnológico. El diseño se enfocó en la usabilidad, la confianza del usuario y la conversión de clientes potenciales.' : 'Leading debt recovery agency in Colombia and Latin America. The platform showcases their specialized services in delinquent portfolio management, highlighting their regional reach, experience, and technology-driven approach. The design focused on usability, user trust, and converting potential clients.'}`,
        category: 'landing',
        technologies: ['TypeScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/coactivasas.webp',
        color: 'green-500',
        github: 'https://github.com/CardonaAndres/GrupoCOActivaSAS',
        demo: 'https://www.grupocoactivasas.com/',
        features: ['Galería', 'Transiciones', 'Dark Mode']
      },
      {
        id: 3,
        title: `${isSpanish ? 'Cuidado y Armonia' : 'Care and Harmony'}`,
        description: `${isSpanish ? 'Landing page para un salón de belleza emergente, diseñada para aumentar su visibilidad en línea y potenciar sus ventas. Esta página ha sido clave para conectar con más clientes y ofrecerles una experiencia de reserva en línea eficiente y accesible.' : 'A landing page for an emerging beauty salon, designed to boost its online visibility and increase sales. This page has been instrumental in connecting with more clients and providing them with an efficient and accessible online booking experience.'}`,
        category: 'web',
        technologies: ['JavaScript', 'React', 'Tailwind'],
        image: '/assets/imgs/projects/secondary/cuidado_y_armomia.webp',
        color: 'rose-500',
        github: 'https://github.com/CardonaAndres/CentroEstetico',
        demo: 'https://centro-estetico-ruby.vercel.app/',
        features: ['Tiempo Real', 'PWA', 'Multi-idioma']
      },
      {
        id: 4,
        title: 'Cuidado y Armonia | Portafolio de servicios',
        description: `${isSpanish ? '¡Portafolio de Servicios de Cuidado Armonía! Este proyecto presenta de forma moderna y accesible los servicios ofrecidos por Cuidado Armonía, enfocados en el bienestar, el cuidado personal y la armonía interior.' : 'Cuidado Armonía Services Portfolio! This project presents the services offered by Cuidado Armonía in a modern and accessible way, focusing on well-being, personal care, and inner harmony.'}`,
        category: 'web',
        technologies: ['Vue.js', 'Vuetify', 'Firebase'],
        image: '/assets/imgs/projects/secondary/portafolio_de_servicios_cuidado_y_armonia.webp',
        color: 'purple-500',
        github: 'https://github.com/CardonaAndres/portafolio-cuidado-armonia',
        demo: 'https://servicios-cuidado-y-armonia.vercel.app/',
        features: ['Tiempo Real', 'PWA', 'Multi-idioma']
      }
    ];

    return {
        projects,
        secondaryProjects
    }
}
