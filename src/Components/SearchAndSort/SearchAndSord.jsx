import React from 'react'
import MySel from '../UI/MySel'
const SearchAndSord = ({filter, setFilter}) => {
  return (
    <div>
            <MySel 
            value={filter.sort}
            onChange={selected=>setFilter({...filter,sort: selected})} 
            defaultValue="Tanlash"
            options={[
              {value:"name", first:"Ism Bo`yicha"},
              {value:"last", first:"Familiya Bo`yicha"}
            ]}
            />
            <input 
              type="text" 
              className='form-control '
              value={filter.quvery}
              onChange={(e)=>setFilter({...filter, quvery: e.target.value})}
            />
          </div>

  )
}

export default SearchAndSord