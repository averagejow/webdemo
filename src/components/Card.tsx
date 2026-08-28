import ScrollReveal from "./ScrollReveal"


interface CardProps{
    source?: string,
    name?: string,    
    description?: string,    
}

function Card({ source, name = "Item", description = "Some text here to describe the item" }: CardProps) {
    return(        
        <ScrollReveal>
            <div className="flex flex-col bg-white/70 w-90 h-130 items-center gap-y-2 cursor-pointer shadow-2xs hover:scale-105 duration-300 transition-all">
                <img className="bg-black/20 w-85 h-85 mt-2" src={source} alt="Image" />
                <h1 className="text-2xl text-center font-semibold mb-2 w-full h-10">{name}</h1>
                <p className="text-center w-70">{description}</p>            
            </div>                    
        </ScrollReveal>
    )            
}

export default Card