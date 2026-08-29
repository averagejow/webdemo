import DateInput from "./DateInput"

interface FormProps{
    formInput?: string[][],
    backgroundColor?: string
}


function Form({formInput = [["name", "input", "placeholder"]]}: FormProps) {
    return(                 
        <div className="flex flex-col gap-x-5 gap-y-5 items-center">
            <form>
                <div className="flex flex-col flex-wrap justify-center w-full h-full gap-x-10 gap-y-5 md:flex-row">  
                    {formInput.map((detail, index) => (                                                                                                    
                        <input className={`w-60 h-10 text-center bg-black/40 rounded-2xl`} key={index} name={detail[0]} type={detail[1]} placeholder={detail[2]}/>                                            
                    ))}
                    <DateInput />
                </div>    
            </form>   
                        
            <button className="w-100 h-15">Book reservation now!</button>
        </div>                                                        
    )
}

export default Form