import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsSection from "./components/SkillsSection";
import CoursesAndProgramsSection from "./components/CoursesAndProgramsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>

    <Homepage />
    <Aboutme />

    <FeaturedProjects />

    <SkillsSection />

      <CoursesAndProgramsSection />

      <ContactSection />
    </>
  );
}
