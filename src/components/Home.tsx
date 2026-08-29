import Carousel from '../components/Carousel'
import ScrollReveal from './ScrollReveal';
import Form from '../components/Form'
import { myCarouselImage, myInputData } from './Data';
//import { useNavigate } from 'react-router'


interface HomeProps {
  text?: string; 
}

function Home({text}: HomeProps) {

    //const navigate = useNavigate();

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)

        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }                       
    
    return (
        <div className="pt-25 flex flex-col w-screen h-max items-center justify-center scroll-smooth ease-in-out"> 
            <ScrollReveal>
                <section id="home-section">                                                                                
                    <div className='flex flex-col w-screen h-full md:flex-wrap gap-y-5'>                                                
                        {/* Home screen text */}
                        <div className="flex flex-col w-full h-30 bg-linear-to-r from-black/80 via-black/40 to-black/60 text-white/85 justify-center items-center">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl sm:text-4xl font-extralight transition-all duration-500 ease-in-out">{text}</h1>                                    
                        </div>
                        
                        <div className='flex flex-col w-screen h-150 items-center gap-y-5'>
                            <Carousel imageSource={myCarouselImage} />
                            
                            <div className='flex flex-row flex-wrap w-full justify-center items-center gap-x-10 gap-y-5 px-20 transition-all duration-300 ease-in-out'>                            
                                {/*<button onClick={() => navigate("/menu")} className='w-150 h-15'>Explore</button>*/}
                                <button onClick={() => scrollTo('appointment')} className='w-150 h-15'>Reservation</button>
                            </div>                                                  
                        </div>                        
                    </div>
                </section>
            </ScrollReveal>           

            <ScrollReveal>
                <section id="appointment" className='scroll-reveal'>
                    <div className='flex flex-col w-screen h-full justify-center items-center gap-y-10 md:flex-row pb-40 md:flex-wrap'>
                        <div className='flex flex-col gap-y-5 gap-x-40 md:flex-row sm:flex-col [&_h1]:text-2xl md:[&_h1]:text-3xl [&_h1]:font-semibold [&_p]:text-2xl transition-all duration-300 ease-in-out'>
                            <div className='flex flex-col gap-y-5'>
                                <h1>Weekdays</h1>
                                <p>Store Hours: 11:00am - 10:00pm</p>
                            </div>
                            
                            <div className='flex flex-col gap-y-5'>
                                <h1>Weekdays</h1>
                                <p>Store Hours: 9:00am - 10:00pm</p>
                            </div>                        
                        </div>                    

                        <div className='flex flex-row gap-y-5 gap-x-4 [&_input]:text-center [&_input]:hover:scale-105 [&_input]:bg-black/20 [&_input]:rounded-2xl [&_input]:h-10 [&_input]:w-50 [&_input]:active:border-black/40 text-black/85 transition-all duration-300 ease-in-out'>
                            <Form formInput={myInputData}/>               
                        </div>                                            

                        <div className='flex flex-ro justify-center'>
                            <p className='text-black/50'>Our team will contact you shortly after your reservation request.</p>
                        </div>    
                    </div>            
                </section>
            </ScrollReveal>
        </div>
    )
}

export default Home