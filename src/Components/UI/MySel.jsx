import React from 'react'

const MySel = ({options, defaultValue, value, onChange}) => {
  return (
    <select  
    class="form-select" 
    aria-label="Default select example" 
    style={{marginBottom:"20px"}}
    value={value}
    onChange={(e)=>onChange (e.target.value)}
    >
        <option>{defaultValue}</option>
        
        {options.map((opt)=>(
            <option value={opt.value}>{opt.first}</option>
        ))}
    </select>
  )
}

export default MySel