const TableButton = ({active, selectTab, children}: {
    active: boolean,
    selectTab: any,
    children: React.ReactNode
}) => {
    const buttonClasses = active ? 'border-b border-purple-500' : 'text-[#ADB7BE]'
    return (
        <button
            onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
                {children}
            </p>
        </button>
    )

}
export default TableButton