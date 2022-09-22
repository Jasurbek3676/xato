import React, {useState} from 'react'
import MyBtn from '../UI/MyBtn'
import MyInp from '../UI/MyInp'
const PostForm = ({createPost}) => {

    const [post, setPost] = useState({name:"", last:"", age:""})
    const addPost = (e)=>{
        e.preventDefault()
        const newPost={
            ...post,
            id: Date.now()
        }
        createPost(newPost)
        setPost({name:"", last:"", age:""})
    }
  return (
    <div>
        <form>
            <MyInp 
            type="text" 
            class="form-control" 
            placeholder="Name" 
            value={post.name}
            onChange={e => setPost({...post, name: e.target.value})}
            style={{marginTop:"20px"}}
            />
            <MyInp  
            type="text"
            class="form-control" 
            placeholder="LastName" 
            value={post.last}
            onChange={e => setPost({...post, last: e.target.value})}
            style={{marginTop:"20px"}}
            />
            <MyInp  
            type="text" 
            class="form-control" 
            placeholder="Age" 
            value={post.age}
            onChange={e => setPost({...post, age: e.target.value})}
            style={{marginTop:"20px"}}
            />  
        </form>
            <MyBtn onClick={addPost}  className="btn btn-primary w-100 " style={{width:"100%", margin:"20px auto"}}>
                Add Post
            </MyBtn>
    </div>
  )
}

export default PostForm