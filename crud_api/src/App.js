import './App.css';
import { useGetPostByIdQuery } from './services/post';
function App() {
  // const responseInfo = useGetAllPostQuery()
   const responseInfo = useGetPostByIdQuery(11)
  console.log("Response Information : ",responseInfo)
  console.log("Data : ",responseInfo.data)
  return (
    <div className="App">
        {/* <h1>RTK -QUERY</h1>
        {
          responseInfo.data.map((post,i)=>
            <div key={i}>
              <h2>{post.id} {post.title}</h2>
              <p>{post.body}</p>
           </div>
          )
        } */}
        <h2>{responseInfo.data.id} {responseInfo.data.title}</h2>
        <p>{responseInfo.data.body}</p>
    </div>
  );
}

export default App;
