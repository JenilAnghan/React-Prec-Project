import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Input } from 'reactstrap'

export default function SingleInputrev() {
    let [city, setcity] = useState("")
    let [allcity, setallcity] = useState([])

    const getdata = (eledata)=>{
        setcity(eledata?.target?.value)
    }

    const adddata = () => {
        if(city.length>0){
            setallcity([...allcity, city])
            setcity("")
            toast.success("City Name Added")
        }else{
            toast.error("Please Fill The Input")
        }
    }
  return (
    <>

    {/* <h1>{city}</h1> */}
    <Input
      value={city}
      type='text'
      onChange={(e)=>setcity(e?.target?.value)}
    >
    
    </Input>

    <button onClick={adddata}>Add City Name</button>

    <div>
        {allcity.map((e,i)=>{
            return(
                <h1 className='border border-dark' key={i}>{e}</h1>
            )
        })}
    </div>
    </>)
}
