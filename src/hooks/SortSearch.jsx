import { useMemo } from "react"



export const useSortPost = (data, sort) =>{
    const getSortPost =  useMemo(() => {
           if(sort){
             return [...data].sort((a,b)=>a[sort].localeCompare(b[sort]))
           }
            return data
           
         },[sort, data]
         
       )
       return getSortPost  
}
export const usePosts = (data, sort, quvery) => {
    const SortPost = useSortPost( data, sort)
    const sortedAndSearched = useMemo(()=>{
           return SortPost.filter(data=>data.name.toLocaleLowerCase().includes(quvery.toLocaleLowerCase()))
         },[quvery, SortPost])  
       return sortedAndSearched
}