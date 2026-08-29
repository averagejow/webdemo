import DateInput from "./DateInput"

interface FormProps{
    formInput?: string[][],
    backgroundColor?: string
}


function Form({formInput = [["name", "input", "placeholder"]]}: FormProps) {
    return(                 
        <div className="flex flex-col flex-wrap items-center justify-center gap-y-10">
            <form>
                <div className="flex flex-col flex-wrap justify-center w-full h-full gap-x-10 gap-y-5 md:flex-row">                      
                    {formInput.map((detail, index) => (                                                                                                    
                        <input className={`w-60 h-10 text-center rounded-2xl`} key={index} name={detail[0]} type={detail[1]} placeholder={detail[2]}/>                                            
                    ))}
                    <DateInput/>                
                </div>   
            </form> 
                        
            <div className="flex flex-row flex-wrap w-full px-20 justify-center">
                <button className="w-100 h-15">Book reservation now!</button>
            </div>            
        </div>                                                        
    )
}

export default Form