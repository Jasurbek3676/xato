import React from 'react'
import MyBtn from '../UI/MyBtn'
const Tbody = ({datas, number, deletePost}) => {



  return (
    <tbody>
        <tr>
            <th scope="row">{number}</th>
            <td>{datas.name}</td>
            <td>{datas.last}</td>
            <td>{datas.age}</td>
            <td>
              <MyBtn onClick={()=>deletePost(datas)} className="btn btn-danger">Delete</MyBtn>
            </td>
        </tr>
    </tbody>
  )
}

export default Tbody