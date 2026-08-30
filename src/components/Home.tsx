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
        <div id="home" className="pt-30 flex flex-col w-full h-max items-center justify-center scroll-smooth ease-in-out overflow-hidden"> 
            <ScrollReveal>
                <section id="home-section">                                                                                
                    <div className='flex flex-col w-full h-full flex-wrap gap-y-10 justify-center items-center'>                                                
                        {/* Home screen text */}                        
                        <h1 className="text-2xl md:text-5xl lg:text-7xl sm:text-4xl font-extralight transition-all duration-500 ease-in-out">{myHomeText}</h1>                                                    
                        <Carousel imageSource={myCarouselImage} />   

                        <div className="flex flex-row flex-wrap w-screen px-20 justify-center md:w-full">                                                 
                            <button onClick={() => scrollTo('appointment')} className='w-150 h-15'>Reservation</button>                                                                                                                
                        </div>
                    </div>
                </section>
            </ScrollReveal>           

            <ScrollReveal>
                <section id="appointment" className='scroll-reveal'>
                    <div className='flex flex-col w-full h-screen pt-20 mb-10 gap-y-5'>
                        <div className='bg-camel/20 flex flex-row w-full h-full items-center justify-center text-center [&_h1]:text-3xl [&_h1]:md:text-5xl [&_h1]:sm:text-4xl [&_p]:md:text-2xl transition-all duration-300 ease-in-out'>                        
                                <div className='flex flex-col gap-y-3 justify-center items-center'>
                                    <h1 className=''>Restaurant Hours</h1>
                                    <p className=''>Weekdays: 11:00am - 10:00pm</p>
                                    <p className=''>Weekends: 9:00am - 10:00pm</p>
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