import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import AboutMe from "@/components/AboutMe";



export default function Home() {
  return (
    <main className="relative bg-theme-primary flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <Grid/>
        <RecentProjects />
        <AboutMe />
        <Footer/>
      </div>
    </main>
  );
}
