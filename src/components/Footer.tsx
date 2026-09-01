import { useState } from 'react'
import { SocialIcon } from 'react-social-icons'

function Footer() {
    const [formAlert, setFormAlert] = useState(false)
    const errorMessage = "Please enter your email"
    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();        
        const value = e.target.value

        if(!value){
            setFormAlert(!formAlert)                       
        }             
    } 

    return (        
        <div id='footer-container' className="flex flex-col w-full h-full z-1 justify-center gap-x-5 gap-y-10 p-15 sm:flex-col md:flex-row lg:flex-row duration-300 transition-all ease-in-out">   
            <div id='footer-details'>
                <h1>Address</h1>
                <p>Makati, Philippines</p>
            </div>

            <div id='footer-details'>
                <h1>Social Media</h1>   
                <div className='flex flex-row gap-x-4'>
                    <SocialIcon borderRadius='5px' network="facebook" url={'www.facebook.com'}/>                    
                    <SocialIcon borderRadius='5px' network="instagram" url='www.instagram.com' /> 
                    <SocialIcon borderRadius='5px' network="tiktok" url='www.tiktok.com' />  
                    <SocialIcon borderRadius='5px' network="youtube" url='www.youtube.com' />                  
                </div>                                          
            </div>

            <div id='footer-details'>
                <h1>Contact Us</h1>
                <p className='text-center'>You may contact us by calling +63977665544 or send us an email at allday@allday.com</p>
            </div>

            
            <form id='footer-details' onSubmit={handleSubmit}>
                <h1>Newsteller</h1>  
                <div className='relative'>
                    <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='input' className="w-60 h-10 text-center rounded-2xl bg-cocoa/85 text-linen" placeholder="Enter you email here"/>
                    {(formAlert && (
                        <div id="alert-box" className='animate-auto-fade absolute flex flex-col -translate-y-22 translate-x-5 bg-linen border border-cocoa text-red-10 w-50 h-8 rounded-2xl justify-center items-center'>
                            <p className='text-red-500'>{errorMessage}</p>
                            <div className='absolute w-3 h-3 bg-linen translate-y-4 -translate-x-18 rotate-45  border-r border-b border-cocoa'></div>
                        </div>
                    ))}
                </div>                              
                <button type='submit' className='w-60 h-10'>Subscribe</button>                                                               
            </form>                                             
        </div>
    )
}

export default Footer