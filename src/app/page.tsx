import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import AboutSection from '@/app/components/AboutSection'
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]  px-12 py-4 ">
            <Navbar/>
            <div className={"container mx-auto px-12 py-4 mt-24"}>

                <HeroSection/>
                <AboutSection/>
            </div>
        </main>
    );
}
