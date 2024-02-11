'use client'
import Image from "next/image";
import exp from "node:constants";
import {useState, useTransition} from "react";
import TableButton from "@/app/components/TableButton";

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition()
    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }
    type TabData = {
        title: string,
        id: string,
        content: React.ReactNode
    }
    const TAB_DATA: TabData[] = [
        {
            title: "Skills",
            id: 'skills',
            content: (
                <ul>
                    <li>Node.js</li>
                    <li>Node.js</li>
                    <li>Node.js</li>
                    <li>Node.js</li>
                    <li>Node.js</li>
                </ul>
            )
        },
        {
            title: "Education",
            id: 'education',
            content: (
                <ul>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            )
        },
        {
            title: "Certifications",
            id: 'certifications',
            content: (
                <ul>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                    <li>2</li>
                </ul>
            )
        },
    ]
    // @ts-ignore
    return (
        <>
            <section className={'text-white'}>
                <div className={'md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'}>
                    <Image src={'/images/about-image.png'} alt={'1'} width={500} height={500}/>
                    <div>
                        <h2 className='text-4xl font-bold text-white mb-4'>About me</h2>
                        <p className={'text-base md:text-lg'}>
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                            I am a full stack web developer
                        </p>
                        <div className={"flex flex-row mt-8"}>
                            <TableButton active={tab === 'education'} selectTab={() => handleTabChange('education')}>
                                {" "}
                                Skills{" "}
                            </TableButton>
                            <TableButton active={tab === 'skills'} selectTab={() => handleTabChange('skills')}>
                                {" "}
                                Education{" "}
                            </TableButton>
                            <TableButton active={tab === 'certifications'}
                                         selectTab={() => handleTabChange('certifications')}>
                                {" "}
                                Certifications{" "}
                            </TableButton>
                        </div>
                        <div className={'mt-8'}>
                            {TAB_DATA.find(t=> t.id === tab)?.content}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AboutSection