const ProjectCard = ({imgUrl, title, description}: { imgUrl: string, title: string, description: string }) => {
    return (
        <>
            <div>
                <div className={'h-52 md:h-72'}
                     style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}}
                ></div>
                <div className={'text-white'}></div>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </>
    )
}
export default ProjectCard