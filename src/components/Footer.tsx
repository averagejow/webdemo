import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
        <div id='footer-container' className="flex flex-col w-full h-full justify-center gap-x-5 gap-y-10 p-15 sm:flex-col md:flex-row lg:flex-row duration-300 transition-all ease-in-out">   
            <div id='footer-details'>
                <h1>Address</h1>
                <p>Makati, Philippines</p>
            </div>

            <div id='footer-details'>
                <h1>Social Media</h1>   
                <div className='flex flex-row gap-x-4'>
                    <SocialIcon borderRadius='5px' network="facebook" url='www.facebook.com'/>                    
                    <SocialIcon borderRadius='5px' network="instagram" url='www.instagram.com' /> 
                    <SocialIcon borderRadius='5px' network="tiktok" url='www.tiktok.com' />  
                    <SocialIcon borderRadius='5px' network="youtube" url='www.youtube.com' />                  
                </div>                                          
            </div>

            <div id='footer-details'>
                <h1>Contact Us</h1>
                <p>You may contact us by calling +63977665544 or send us an email at allday@allday.com</p>
            </div>

            <div id='footer-details'>
                <h1>Subscribe</h1>
                <input className="w-60 h-10 text-center rounded-2xl bg-cocoa/85 text-linen" placeholder="Enter you email here"/>
                <button className='w-60 h-10'>Subscribe</button>
            </div>            
        </div>
    )
}

export default Footer