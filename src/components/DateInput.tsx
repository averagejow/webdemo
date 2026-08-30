import { useState } from "react"    
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateInput() {

    const [selectedDate, setSelectedDate] = useState(null)
    
    return(       
        <Datepicker    
            id=""    
            className="text-center text-cocoa h-10 w-60 bg-khaki/60 rounded-2xl"                                        
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText="Select Date"            
        />                                         
    )
}   

export default DateInput