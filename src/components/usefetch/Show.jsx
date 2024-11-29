import React from 'react'
import UseFetch from './UseFetch'
document.title ="use fetch"
import "./style.css"
const Show = () => {
   const {data} = UseFetch("https://jsonplaceholder.typicode.com/todos")
   const totalCompleted = data.filter(item => item.completed).length;
   const totalIncomplete = data.filter(item => !item.completed).length;



  return (
    <div>
        <>
        <h1 style={{color:"green"}}>Total completed Task: {totalIncomplete}</h1>
        <h1 style={{color:"red"}}>Total Completed Task: {totalCompleted}</h1>
        {data && data.map((value)=>(
            <div key={value.id}>
                <h1>{value.id}</h1>
                <p>{value.title}</p>
                <button className={`${value.completed ? "complete":"in_completed"}`}>{`${value.completed ? "completed":"incomplete"}`}</button>
            </div>
        ))}
        </>
    </div>
  )
}

export default Show
// {userId: 10, id: 190, title: 'accusamus sint iusto et voluptatem exercitationem', completed: true}