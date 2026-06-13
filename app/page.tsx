import Homepage from "./components/Homepage";
import Aboutme from "./components/Aboutme";
import AcademicActivity from "./components/AcademicActivity";
import FeaturedProjects from "./components/FeaturedProjects";
import SkillsSection from "./components/SkillsSection";
import CoursesAndProgramsSection from "./components/CoursesAndProgramsSection";
import ContactSection from "./components/ContactSection";
import PhotoGallery from "./components/PhotoGallery";
// import Homepage2 from "./components/Homepage2";
// import Homepage3 from "./components/Homepage3";

export default function Home() {
  return (
    <>

      <Homepage />
      {/* <Homepage2 /> */}
      {/* <Homepage3 /> */}
      <Aboutme />

      <PhotoGallery />

      <AcademicActivity />

      <SkillsSection />

      <FeaturedProjects />

      <CoursesAndProgramsSection />

      <ContactSection />

      
    </>
  );
}
