import React, { useState } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import './App.css';
import { useEffect } from "react";
import axios from 'axios'

function App() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState(false);
  const [page,setPage]=useState(1)
  const [salaryOrder,setSalaryOrder]=useState("ASC")
  const [order,setOrder]=useState(true)
  useEffect(()=>{
    fetchdata({page})
  },[page])

  const fetchdata=async({page})=>{
    setLoading(true)
    axios({
      method:'get',
      url:"http://localhost:3000/candidates",
      params:{
        _page:page,
        _limit:5,
        _sort:"salary",
        _order:salaryOrder

      }
    })
    .then(res=>{

      setData(res.data);
      setLoading(false)
    })
    .catch(error=>{
      setError(true)
      setLoading(false)
    })
  }
  console.log(data)
  return (
    <div className="App">
       <div>
        <div id="loading-container">...Loading</div>
        {/* {order?(
          <Button disabled={salaryOrder==="ASC"} onClick={()=>setSalaryOrder("ASC") }  id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        ):(<Button disabled={salaryOrder==="DESC"} onClick={()=>setSalaryOrder("DEC")} id="SORT_BUTTON" title={`Sort by Decending Salary`} />)} */}
        <Button disabled={salaryOrder==="DESC"} onClick={()=>setSalaryOrder("DESC")} id="SORT_BUTTON" title={`Sort by Ascending Salary`} />
        <Button disabled={page===1} onClick={()=>setPage(page-1)} title="PREV" id="PREV" />
        <Button onClick={()=>setPage(page+1)} id="NEXT" title="NEXT" />
      </div>
     <div>
      {data.map((item) => <CandidateCard key={item.id} {...item}/>)}
      </div>
    </div>
  );
}

export default App;
