import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('')
  
    const handleInputChange = (e)=>{    
        setInputValue(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('Handle Submit');

        if(inputValue.trim().length >= 2){
            setCategory(cat => [inputValue, ...cat])   
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit} > 
        <p>{inputValue}</p>
         <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
         />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default AddCategory
