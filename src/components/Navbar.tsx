

interface NavMenuListProps {
  menuList?: string[]; 
}

function Navbar({menuList = ["Tab1", "Tab2", "Tab3"]}: NavMenuListProps){
    return (
        <div className="fixed flex flex-row w-full h-15 justify-center z-1 top-0">        
            <div id="nav" className=" flex flex-row w-100 h-full items-center justify-center rounded-b-2xl shadow-2xl shadow-cocoa/40">
                <ul className="flex flex-row cursor-pointer ">
                    {menuList.map((menu, menuIndex) => (
                        <li key={menuIndex} className="hover:translate-y-2 hover:mx-2 hover:scale-110">
                            <a id="nav-link" href={`#/${menu.toLocaleLowerCase()}`} className="hover:rounded-2xl p-3 duration-500 ease-in-out">{menu}</a>
                        </li>
                    ))}                
                </ul>
            </div>
        </div>
    )
}

export default Navbar
