import ScrollReveal from "./ScrollReveal"

function AboutUs() {
    return (        
        <div id="about" className="flex flex-col w-full h-max items-center justify-center p-20 gap-y-10">     
            <ScrollReveal>
                <div className="flex flex-col w-full h-full gap-x-20 gap-y-10  items-center pt-20">      
                    {/* section text */}                                      
                    <p className="text-2xl font-extralight">Welcome to Maica's Kitchen, where great food, warm hospitality, and memorable dining come together. We are passionate about serving a delicious variety of freshly prepared dishes that bring people together around the table.</p>                                                                   
                    <img className="w-full h-80 object-cover object-center rounded-2xl ease-in-out hover:scale-105 duration-300 transition-all shadow-2xl" src="https://images.pexels.com/photos/14199731/pexels-photo-14199731.jpeg" alt="" />                                                                                                                                        
                </div>
            </ScrollReveal>

            <ScrollReveal>
                <div className="flex flex-col w-full h-full gap-x-20 gap-y-10 items-center sm:flex-col lg:flex-row">                                                        
                    {/* section text */}   
                    <p className="text-2xl font-extralight">Our buffet offers something for everyone—from flavorful favorites and comforting classics to exciting dishes made with quality ingredients. We believe that good food should be enjoyed generously, shared happily, and served with care.</p>
                </div>
                </ScrollReveal>   
                
            <ScrollReveal>
                <div className="flex flex-col w-full h-full items-center gap-x-20 gap-y-10">    
                    <img className="w-full h-80 object-cover object-center rounded-2xl ease-in-out hover:scale-105 duration-300 transition-all shadow-2xl" src="https://images.pexels.com/photos/32689482/pexels-photo-32689482.jpeg" alt="" /> 
                    {/* section text */}                   
                    <p className="text-2xl font-extralight">At Maica's Kitchen, our goal is simple: to give every guest a satisfying dining experience filled with great flavors, friendly service, and plenty of choices. Whether you are dining with family, celebrating a special occasion, or simply enjoying a meal with friends, we are happy to have you with us.<br/><br/>Come hungry, leave happy!</p>                                                                                              
                </div>
            </ScrollReveal>                                                
        </div>        
    )
}


export default AboutUs