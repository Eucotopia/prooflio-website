const ProjectTag = ({name, onClick, isSelected}: { name: string, onClick: any, isSelected: boolean }) => {
    const buttonStyles = isSelected ? 'bg-purple-500 text-white' : 'text-[#ADB7BE] border-slate-600'
    return (
        <>
            <button
                onClick={() => onClick(name)}
                className={`${buttonStyles} rounded-full border-2  px-6 text-xl cursor-pointer`}>
                {name}
            </button>
        </>
    )
}
export default ProjectTag
