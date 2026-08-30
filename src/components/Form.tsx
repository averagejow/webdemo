import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

interface FormProps{
    formInput?: string[][],
    backgroundColor?: string
}

function Form({formInput = [["name", "input", "placeholder"]]}: FormProps) {

    const [selectedDate, setSelectedDate] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        guest: '',
        date: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }; 

    const handleDateChange = (date) => {
        setFormData((prev) => ({...prev, date: date.toLocaleDateString()}))
        setSelectedDate(date)
    }

    const isFormValid = Object.values(formData).every((value) => value.trim() !== '')

     const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            showFormError(!formError)
            setFormMessage("Please complete the form.")
        }

        else{
            setFormMessage("Reservation booking sent.")
            showFormError(!formError)
        }

        console.log('Form submitted successfully!', formData);
    };

    const [formError, showFormError] = useState(false)
    const [formMessage, setFormMessage] = useState("")

    return(             
        <div className=" relative flex flex-col flex-wrap justify-center gap-y-10">              
            <form onSubmit={handleSubmit}>             
                <div className="flex flex-col flex-wrap justify-center items-center w-full h-full gap-x-10 gap-y-5 md:flex-row">                      
                    {formInput.map((detail, index) => (                                                                                                    
                        <input value={setFormData[index]} onChange={handleChange} className={`w-60 h-10 text-center rounded-2xl`} key={index} id={detail + "Input"} name={detail[0]} type={detail[1]} placeholder={detail[2]}/>                                                                    
                    ))}

                    <Datepicker    
                        id="dateValue"  
                        onSelect={handleChange}  
                        className="text-center text-cocoa h-10 w-60 bg-khaki/60 rounded-2xl"                                        
                        selected={selectedDate}
                        onChange={handleDateChange}
                        placeholderText="Select Date"            
                    />                       
                </div>   
                                     
                <div className="flex flex-row flex-wrap w-screen px-20 justify-center md:w-full">
                    <button type='submit' className="w-100 h-15">Book reservation now!</button>
                </div>  
            </form>  

            {(formError && (
                <div className='absolute grid grid-rows-1 w-full h-full justify-center items-center'>
                    <div className='flex flex-col w-80 h-40 justify-center items-center bg-camel/90 gap-y-3 text-center p-20 rounded-2xl border-2'>
                        <p className='text-xl w-80 mb-5 text-linen'>{formMessage}</p>
                        <button className="w-40" onClick={() => showFormError(!formError)}>Close</button>  
                    </div>                                                      
                </div>
            ))}
        </div>                                                                 
    )
}

export default Form