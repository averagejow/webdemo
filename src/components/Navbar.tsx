

interface NavMenuListProps {
  menuList?: string[]; 
}

function Navbar({menuList = ["Tab1", "Tab2", "Tab3"]}: NavMenuListProps){
    return (
        <div id="nav" className="fixed flex flex-row w-full h-12 z-1 top-8 left-0 items-center justify-center">
            <ul className="flex flex-row cursor-pointer ">
                {menuList.map((menu, menuIndex) => (
                    <li key={menuIndex} className="hover:scale-105">
                        <a id="nav-link" href={`#/${menu.toLocaleLowerCase()}`} className="p-3 hover:scale-105 duration-300 ease-in-out">{menu}</a>
                    </li>
                ))}                
            </ul>
        </div>
    )
}

export default Navbar
