import React,{useState}from 'react'

function Karth() {
    const[counts1,setCounts1]=useState(0);
    function myfunc()
    {
        setCounts1(counts1+1)
    }
    function myfunc1()
    {
        setCounts1(counts1-1)
    }
    const[counts2,setCounts2]=useState(2);
    function myfunc2()
    {
      setCounts2(counts2+2)
    }
  return (
    <>
    <button onClick={myfunc}>increase</button><br></br>
    <button onClick={myfunc1}>decrease</button><br></br><br></br>
    <span>{counts1}</span><br></br><br></br>
    <button onMouseOver={myfunc2}>increasing</button><br></br>
    <span>{counts2}</span>
    </>
     
  )
}

export default Karth
