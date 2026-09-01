import { useState } from "react"

interface CustomInputProps {
    placeholder?: string
    onChange?: EventListener
}

function CustomInput({ placeholder}: CustomInputProps) {

    const [value, setValue] = useState('')
    const isEmpty = value.trim() === '';

    return (
        <div> 
            {isEmpty && <span>*</span>}
            <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder}/>
        </div>
    )
}

export default CustomInput