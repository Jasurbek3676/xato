import React from 'react'
import Tbody from './Tbody'
import Thead from './Thead'
const TableList = ({data, deletePost}) => {
  return (

        <table  className="table table-dark table-striped">

            <Thead />
            {data.map((datas, index)=>{
              return <Tbody datas={datas} number={index+1} deletePost={deletePost}/>})}
        </table>

  )
}

export default TableList