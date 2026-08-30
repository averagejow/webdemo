import { BsChevronLeft, BsChevronRight } from "react-icons/bs"


interface CarouselProps { 
    imageSource?: string[]
    width?: number
    height?: number
}

function Carousel({imageSource = [], width = 100, height = 80}: CarouselProps) {    

    const slideLeft = (scrollLegnth: number) => {
        var slider = document.getElementById('slider')
        slider!.scrollLeft += scrollLegnth
    }

    return ( 
        <>          
            {/* image container */}
            <div className={`flex flex-row w-full justify-center items-center gap-x-2 px-20`}>                
                {/* button to scrol left */}
                <div className="translate-x-24 z-10">                
                    <BsChevronLeft id="arrows" onClick={() => slideLeft(-420)} size={60}/>
                </div> 

                {/* carousel image */}    
                <div id='slider' className="h-full w-full min-w-100 flex gap-x-4 items-center overflow-x-scroll scroll scrollbar-none whitespace-nowrap scroll-smooth">                                                                               
                    {imageSource.map((source: string, index: number) => (                             
                        <img key={index} className={`h-${height} w-${width} inline-block cursor-pointer shadow-black/20 hover:scale-105 ease-in-out duration-300`} src={`${source}`} alt="/" />                                                                                         
                    ))}                                                                            
                </div> 
                        
                {/* button to scrol right */}
                <div className="-translate-x-20 z-10">
                    <BsChevronRight id="arrows" onClick={() => slideLeft(420)} size={60}/>
                </div>                                 
            </div>                                                         
        </>                                                                                                                                   
    )
}

export default Carousel