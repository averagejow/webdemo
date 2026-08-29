import { useState } from "react"    
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DateInput() {

    const [selectedDate, setSelectedDate] = useState(null)
    
    return(       
        <Datepicker        
            className="text-center text-black/85 h-full w-full rounded-2xl"                                        
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            placeholderText="Select Date"            
        />                                         
    )
}   

export default DateInput