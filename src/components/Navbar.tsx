

interface NavMenuListProps {
  menuList?: string[]; 
}

function Navbar({menuList = ["Tab1", "Tab2", "Tab3"]}: NavMenuListProps){
    return (
        <div className="fixed flex flex-row w-full h-12 z-1 top-8 left-0 bg-black/70 items-center text-white/85">
            <ul className="flex flex-row cursor-pointer ml-20">
                {menuList.map((menu, menuIndex) => (
                    <li key={menuIndex}>
                        <a href={`#/${menu.toLocaleLowerCase()}`} className="p-3 hover:bg-black/90 hover:scale-105 duration-300 ease-in-out">{menu}</a>
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default Navbar
