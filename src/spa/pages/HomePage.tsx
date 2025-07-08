import { Navbar } from "@/core/components/navigation/Navbar"
import { Hero } from "../components/Hero"
import { ProjectsSection } from "../components/ProjectsSection"

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-black">
        <div id="about">
          <Hero />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
      </div>
    </>
  )
}

