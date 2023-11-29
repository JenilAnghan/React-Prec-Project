import React ,{UseEfectCom, useState}from 'react'

export default function UseEfectCom() {
    let  [count, setcount] = useState(0);
    let [count2, setcount2] = useState(0);
    UseEfectCom()

    console.log(" ----------------------------UseEfectCom------------------------".UseEfectCom);

    setTimeout()
  return (<>
    <div>
      <h1>USESTATE</h1>
      <button color="danger" onClick={()=> }>INC-COUNT</button>
    </div>
    </>
  )
}
