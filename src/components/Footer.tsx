import { SocialIcon } from 'react-social-icons'


function Footer() {

    const unifiedStyle = (
        "flex flex-col items-center w-full text-white/85 gap-y-4"
    )

    const textStyle = (
        "text-2xl"
    )

    return (
        <div className="flex flex-col w-full h-full bg-black/70 justify-center gap-x-5 gap-y-10 p-15 sm:flex-col md:flex-row lg:flex-row duration-300 transition-all ease-in-out">   
            <div className={unifiedStyle}>
                <h1 className={textStyle}>Address</h1>
                <p>Makati, Philippines</p>
            </div>

            <div className={unifiedStyle}>
                <h1 className={textStyle}>Social Media</h1>   
                <div className='flex flex-row gap-x-4'>
                    <SocialIcon borderRadius='5px' network="facebook" url='www.facebook.com' />                    
                    <SocialIcon borderRadius='5px' network="instagram" url='www.instagram.com' /> 
                    <SocialIcon borderRadius='5px' network="tiktok" url='www.tiktok.com' />  
                    <SocialIcon borderRadius='5px' network="youtube" url='www.youtube.com' />                  
                </div>                                          
            </div>

            <div className={unifiedStyle}>
                <h1 className={textStyle}>Contact Us</h1>
                <p>You may contact us by calling +63977665544 or send us an email at allday@allday.com</p>
            </div>

            <div className={unifiedStyle}>
                <h1 className={textStyle}>Subscribe</h1>
                <input className="text-center border-2 rounded-2xl bg-white/40 text-black/85 w-60 h-10" placeholder="Enter you email here"/>
                <button className='w-60 h-10 text-xl'>Subscribe</button>
            </div>            
        </div>
    )
}

export default Footer