import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react'

interface FormProps{
    formInput?: string[][],
    backgroundColor?: string
}

const InitialFormState = {
    name: '',
    contact: '',
    email: '',
    guest: '',
    date: '',
}

function Form({formInput = [["name", "input", "placeholder"]]}: FormProps) {

    const [selectedDate, setSelectedDate] = useState()
    const [showAlert, setShowAlert] = useState(false)
    const [formData, setFormData] = useState(InitialFormState)
    
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

        if(isFormValid){
            setFormMessage("Reservation application successful!")
            setSubmitSuccess(!submitSuccess)            
        }        

        else{
            setShowAlert(!showAlert)
        }
    };     
    
    const clearForm = () => {
        setFormData(InitialFormState) 
        setSubmitSuccess(false)
        setSelectedDate(undefined)     
    }

    const [submitSuccess, setSubmitSuccess] = useState(false)
    const [formMessage, setFormMessage] = useState("")

    return(             
        <div className=" relative flex flex-col flex-wrap justify-center gap-y-10">              
            <form onSubmit={handleSubmit}>             
                <div className="relative flex flex-col flex-wrap justify-center items-center w-full h-full gap-x-10 gap-y-5 md:flex-row">                      
                    {formInput.map((detail, index) => (                                                                                                                        
                        <div className='relative' key={detail+"Required"}>                                                                            
                            {!formData[detail[0]] && <span id='form-span'>*</span>} 
                            <input value={formData[detail[0]]} onChange={handleChange} className={`w-60 h-10 text-center rounded-2xl`} key={index} id={detail + "Input"} name={detail[0]} type={detail[1]} placeholder={detail[2]}/>                                                                                                
                        </div>                                                                              
                    ))}               

                    <div className='relative'>
                        {!formData.date && <span id='form-span'>*</span>}
                        <Datepicker
                            id="dateValue"                              
                             onSelect={handleDateChange}
                            className="text-center text-cocoa h-10 w-60 bg-khaki/60 rounded-2xl"                                        
                            selected={selectedDate}
                            onChange={handleDateChange}
                            placeholderText="Select Date"            
                        />                               
                    </div>
                </div>                
                                     
                <div className="relative flex flex-row flex-wrap w-screen px-20 justify-center md:w-full">  
                    {showAlert &&
                        <div id="alert-box" className='animate-auto-fade absolute flex flex-col -translate-y-12 bg-linen border border-cocoa text-red-10 w-50 h-8 rounded-2xl justify-center items-center'>
                            <p className='text-red-500'>Please complete the form.</p>
                            <div className='absolute w-3 h-3 bg-linen translate-y-4 -translate-x-18 rotate-45  border-r border-b border-cocoa'></div>
                        </div> 
                    }                  
                    <button type='submit' className="w-100 h-15">Book reservation now!</button>
                </div>  
            </form>

            {(submitSuccess && (
                <div className='absolute grid grid-rows-1 w-full h-full justify-center items-center'>
                    <div className='flex flex-col w-80 h-40 justify-center items-center bg-camel/90 gap-y-3 text-center p-20 rounded-2xl border-2'>
                        <p className='text-xl w-80 mb-5 text-linen'>{formMessage}</p>
                        <button className="w-40" onClick={() => clearForm()}>Close</button>
                    </div>                                                      
                </div>
            ))}
        </div>                                                                 
    )
}

export default Form