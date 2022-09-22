import React, { useState} from 'react'
import './App.css';
import TableList from './Components/Table/TableList';
import PostForm from './Components/PostForm/PostForm';
import SearchAndSord from './Components/SearchAndSort/SearchAndSord';
import { usePosts } from './hooks/SortSearch';
function App() {
  const [data, setData]= useState([
    { id:"1", name:"Jasurbek", last:"Raximov", age:"10" },
    { id:"2", name:"Olimjon", last:"Botirov", age:"15" },
    { id:"3", name:"Abdullox", last:"Badalov", age:"20" },
    { id:"4", name:"Abduvali", last:"Abduvaliev", age:"25" },
    { id:"5", name:"Shaxriyor", last:"Sodiqjonov", age:"30" },
    { id:"6", name:"MuhammadSaid", last:"Tursunov", age:"35" }
  ])

    const [filter, setFilter] = useState({sort:"", quvery:""})
    const SearchedAndSortedPosts = usePosts([data, filter.sort, filter.quvery ])

  const createPost = (newPost) =>{
    setData([...data, newPost])
  }


  const deletePost = (datas) =>{
    setData(data.filter(s => s.id !== datas.id))
  }




  return (
    <div className="App">

      <PostForm  createPost={createPost}/>

          <SearchAndSord  filter={filter} setFilter={setFilter}/>

      {SearchedAndSortedPosts.length 
      ? <TableList  data={SearchedAndSortedPosts} deletePost={deletePost}/>
      :<h4 className='text-center'>Malumot Mavjud emas</h4>
      }
      


    </div>
  );
}

export default App;
