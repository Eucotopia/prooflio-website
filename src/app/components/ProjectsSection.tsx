'use client'
import ProjectCard from "./ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import {useRef, useState} from "react";
import {motion, useInView} from "framer-motion";

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInview = useInView(ref, {once: true})
    const handleTagClick = (tag: string) => {
        setTag(tag)
    }
    const projectsData = [
        {
            id: 1,
            title: "React Portfolio Website",
            description: "Project 1 description",
            image: "/images/projects/1.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 2,
            title: "Potography Portfolio Website",
            description: "Project 2 description",
            image: "/images/projects/2.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 3,
            title: "E-commerce Application",
            description: "Project 3 description",
            image: "/images/projects/3.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 4,
            title: "Food Ordering Application",
            description: "Project 4 description",
            image: "/images/projects/4.png",
            tag: ["All", "Mobile"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 5,
            title: "React Firebase Template",
            description: "Authentication and CRUD operations",
            image: "/images/projects/5.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
        {
            id: 6,
            title: "Full-stack Roadmap",
            description: "Project 5 description",
            image: "/images/projects/6.png",
            tag: ["All", "Web"],
            gitUrl: "/",
            previewUrl: "/",
        },
    ];
    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    )
    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1},
        exit: {y: -50, opacity: 0}
    }
    return (
        <section>
            <h2 className={'text-center text-4xl font-bold text-white mt-4'}>My Projects</h2>
            <div className={"text-white flex flex-row justify-center items-center gap-2 py-6"}>
                <ProjectTag name={'All'} onClick={handleTagClick} isSelected={tag === "All"}/>
                <ProjectTag name={'Web'} onClick={handleTagClick} isSelected={tag === "Web"}/>
                <ProjectTag name={'Mobile'} onClick={handleTagClick} isSelected={tag === "Mobile"}/>
            </div>
            <ul ref={ref} className={'grid md:grid-cols-3 gap-8 md:gap-12'}>
                {
                    filteredProjects.map((item, index) => (
                        <motion.li
                            transition={{duration: 0.1, delay: index * 0.4}}
                            key={index}
                            initial={"initial"}
                            animate={isInview ? "animate" : "initial"}
                            variants={cardVariants}>
                            <ProjectCard key={index} title={item.title} description={item.description}
                                         imgUrl={item.image}/>
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
export default ProjectsSection