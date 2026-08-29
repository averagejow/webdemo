import Carousel from '../components/Carousel'
import ScrollReveal from './ScrollReveal';
import Form from '../components/Form'
import { myCarouselImage, myInputData, myHomeText } from './Data';
//import { useNavigate } from 'react-router'


function Home() {

    //const navigate = useNavigate();

    const scrollTo = (id: string) => {
        const element = document.getElementById(id)

        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }                       
    
    return (
        <div id="home" className="pt-30 flex flex-col w-screen h-full items-center justify-center scroll-smooth ease-in-out"> 
            <ScrollReveal>
                <section id="home-section">                                                                                
                    <div className='flex flex-col w-screen h-full md:flex-wrap gap-y-5'>                                                
                        {/* Home screen text */}
                        <div className="flex flex-col w-full h-30 justify-center items-center">
                            <h1 className="text-3xl md:text-5xl lg:text-7xl sm:text-4xl font-extralight transition-all duration-500 ease-in-out">{myHomeText}</h1>                                    
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
                    <div className='flex flex-col w-full h-screen pt-20 mb-10'>
                        <div className='flex flex-row w-full h-full justify-center gap-y-1 gap-x-5 md:gap-x-30 text-center'>                        
                                <div className='flex flex-col gap-y-10 justify-center'>
                                    <h1 className='text-6xl'>Weekdays</h1>
                                    <p className='text-3xl'>Store Hours: 11:00am - 10:00pm</p>
                                </div>
                                
                                <div className='flex flex-col gap-y-10 justify-center'>
                                    <h1 className='text-6xl'>Weekdays</h1>
                                    <p className='text-3xl'>Store Hours: 9:00am - 10:00pm</p>
                                </div>                                            
                        </div>  

                        <div className='flex flex-col w-full h-full justify-center gap-y-1 md:flex-row md:flex-wrap'>                                                                     
                                <Form formInput={myInputData}/> 
                                <p className='text-center pr-10 pl-10'>Our team will contact you shortly after your reservation request.</p>                                        
                        </div>   
                    </div>        
                </section>
            </ScrollReveal>
        </div>
    )
}

export default Home