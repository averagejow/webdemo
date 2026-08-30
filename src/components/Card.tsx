import ScrollReveal from "./ScrollReveal"


interface CardProps{
    source?: string,
    name?: string,    
    description?: string,    
}

function Card({ source, name = "Item", description = "Some text here to describe the item" }: CardProps) {
    return(        
        <ScrollReveal>
            <div className="flex flex-col rounded-2xl bg-khaki/85 w-90 h-115 items-center gap-y-2 cursor-pointer shadow-2xs hover:scale-105 duration-300 transition-all">
                <img className="w-85 h-65 min-h-60 mt-2 object-cover object-center border rounded-t-2xl" src={source} alt="Image" />
                <h1 className="bg-linen/40 text-2xl text-center font-semibold w-85 h-10 border">{name}</h1>
                <p className="bg-linen/40 grid grid-cols-1 items-center text-center text-wrap w-85 border rounded-b-xl h-40 p-5 mb-2">{description}</p>            
            </div>                    
        </ScrollReveal>
    )            
}

export default Card