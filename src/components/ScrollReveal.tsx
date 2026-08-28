import { useState, useEffect, useRef } from "react";

interface ScrollRevealProps{
    children: React.ReactNode
}

export default function ScrollReveal({ children }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const elementref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && elementref.current) {
                        setIsVisible(true)
                    
                    }
                else{
                    setIsVisible(false)
                }},
                
                {threshold: 0.1}
            )   

            if (elementref.current) {
                observer.observe(elementref.current)
            }            
        
            return () => observer.disconnect();
        }, 
    [])

    return (
        <div    
            ref={elementref}
            className={`transition-all duration-1300 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}                
        >
            {children}
        </div>
    )
}