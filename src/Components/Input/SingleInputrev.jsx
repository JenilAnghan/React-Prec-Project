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
        }
    }
  return (
    <>

    <h1>{}</h1>
    <Input
      value={""}
      type='text'
      onChange={()=>setcity()}
    >
    
    </Input>

    <button onClick={adddata}>Add City Name</button>
    </>)
}
