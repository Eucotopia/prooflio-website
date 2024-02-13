import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from '@/app/components/AboutSection'
import ProjectsSection from "@/app/components/ProjectsSection";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]  px-12 py-4 ">
            <Navbar/>
            <div className={"container mx-auto px-12 py-4 mt-24"}>

                <HeroSection/>
                <AchievementsSection/>
                <AboutSection/>
                <ProjectsSection/>
            </div>
        </main>
    );
}
